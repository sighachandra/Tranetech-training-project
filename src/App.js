import React, { useState , useEffect }  from 'react';
import axios from 'axios';
import { Button, Checkbox, Form, Input , DatePicker, Select, Upload} from 'antd';
import { Col, Row,  Radio, Tabs, Menu} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {
  UserOutlined,
  LockOutlined,
  CreditCardOutlined,
  BellOutlined,
  LaptopOutlined, 
  NotificationOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import { Avatar } from 'antd';
import { Typography } from 'antd';
import Avatar0 from './Images/empty.jpg';
import Avatar1 from './Images/avatar1.jpg';
import Avatar2 from './Images/avatar2.png';
import Avatar3 from './Images/avatar3.png';
import { setLoading, setFetchUserDetails } from './reduxStore/commonReducer';
import { genActionStyle } from 'antd/es/alert/style';

const { Title } = Typography;
const { TabPane } = Tabs;

const userImages = [Avatar0, Avatar1, Avatar2, Avatar3];

const App = () => {
  const [size, setSize] = useState('large');
  const [user, setUser] = useState(userImages[0]);
  const [newUser, setNewUser] = useState('');
  const [isNewUser, setIsNewUser] = useState(0);
  const [clearUserField, setClearUserField] = useState('');
  const [editedName, setEditedName] = useState('');

  //============= rearranging it with new features =================//
  const [userDetails, setUserDetails] = useState([]);
  const dispatch = useDispatch();

  const common = useSelector(state => state.common);
  let userName = common.fetchUserDetails.map((single, index) => single.name);
  
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const changeUser = () => {
    const index = userImages.indexOf(user);
    setUser(index < userImages.length - 1 ? userImages[index + 1] : userImages[1]);
    dispatch(setLoading(true));
  };

  const removeUser = () => {
     setUser(userImages[0]);
  };
// ========= deleting add user name =====================//

  const deleteItemClick = event => {
    const cid = Number(event.currentTarget.id);
    const pendingUser = userDetails.filter(
      (item) => item.id !== cid,
    );
    setUserDetails(pendingUser);

  };

  // ===========editbutton click function====================//

  const editItemClick = event => {
    const cid = Number(event.currentTarget.id);
    const editUser = userDetails.filter(
      (item) => item.id === cid,
    );
    setEditedName(editUser[0].userName);
    setClearUserField(editUser[0].userName);
    setIsNewUser(1);
  };

// ========userinput value updation===========//

  const handleChange = event => {
    const userArrayLength = userDetails.length;
    if(isNewUser === 0){
      setNewUser({ id: userArrayLength + 1, userName: event.target.value });
      setClearUserField(event.target.value);
    }
    setClearUserField(event.target.value);
  };

  //=========== checking of the new user name ================//

  const checkNewUser = () => {
      if(isNewUser === 0){
        setUserDetails(current => [...current, newUser]);
        
      }else if(clearUserField !== '' && isNewUser === 1){
         const editedNameUser = userDetails.filter(
          (item) => item.userName === editedName,
        );
  const editedDataName = userDetails.map((obj) => {
          if (obj.id === editedNameUser[0].id) {
            return {...obj, userName: clearUserField};
          }
          return obj;
           });
          setUserDetails(editedDataName);
          setIsNewUser(0);
      }
      setClearUserField('');
  };

  const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });


  // ==========fetching user details===================//

  const fetchUserDetails = async() => {
    try{
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      if(data){
        dispatch(setFetchUserDetails(data));
      
      }
      var userFromJson = data.map(indiUser => ({ id: indiUser.id, userName: indiUser.name }));
      setUserDetails(userFromJson);
    
    }catch(error){

    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);


  
  return (

    <div className='icon-text-wrapp'>
        <Tabs tabPosition="left" className='tabStyle'>
          <TabPane tab={(<span className='tab-text'><UserOutlined/>Edit Profile</span>)} key="1">
            <div className='avatar-div'>
              <Avatar size={100} src={user} />
               
                 <Button type="primary" className='change-avatar'  onClick={changeUser} size={size}>
                    Change Avatar
                 </Button>
                 <Button onClick={removeUser} size={size}>Remove</Button>
            </div>     
            <div>
              <Row>
                  <Col span={24}>
                  <Form
                
                     layout="vertical"
                     name="basic"
                     labelCol={{
                     span: 8,
                    }}
                    wrapperCol={{
                    span: 16,
                   }}
                   initialValues={{
                   remember: true,
                  }}
                   onFinish={onFinish}
                   onFinishFailed={onFinishFailed}
                   autoComplete="off"
                  >
                  <Row>
                    <Col span={12}>
                      <Form.Item
                        label={ 
                          <p className="form-p">Name</p>
                          }
                        name="name"
                        rules={[
                        {
                          required: true,
                          message: 'Please input your name',
                        },
                      ]}
                      >
                      <Input/>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label={
                          <p className='form-p'>Username</p>
                        }
                        name="username"
                        rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                      >
                      <Input/>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label={
                          <p className='form-p'>Email</p>
                        }
                        name="email"
                        rules={[
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ]}
                      >
                      <Input/>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label={
                          <p className='form-p'>Date of Birth</p>
                        }
                        name="date-picker"
                        rules={[
                        {
                          required: false,
                          message: 'Please input your date of birth!',
                        },
                      ]}
                      >
                      <DatePicker />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label={
                          <p className='form-p'>Phone Number</p>
                        }
                        name="phone"
                        rules={[
                        {
                          required: false,
                          message: 'Please input your username!',
                        },
                      ]}
                      >
                      <Input/>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label={
                          <p className='form-p'>State</p>
                        }
                        name="state"
                        rules={[
                        {
                          required: false,
                        },
                      ]}
                      >
                       <Select>
                         <Select.Option value="kerala">Kerala</Select.Option>
                         <Select.Option value="karnataka">Karnataka</Select.Option>
                         <Select.Option value="tamil nadu">Tamil Nadu</Select.Option>
                       </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label={
                          <p className='form-p'>Address</p>
                        }
                        name="address"
                        rules={[
                        {
                          required: false,
                        },
                      ]}
                      >
                      <Input/>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label={
                          <p className='form-p'>City</p>
                        }
                        name="city"
                        rules={[
                        {
                          required: false,
                        },
                      ]}
                      >
                      <Input/>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label={
                          <p className='form-p'>Post Code</p>
                        }
                        name="postcode"
                        rules={[
                        {
                          required: false,
                        },
                      ]}
                      >
                      <Input/>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item>
                        <Button type='primary' htmlType='submit'>Save Changes</Button>
                      </Form.Item>
                    </Col>
                  </Row>
            </Form>
                  </Col>
              </Row>
              
           </div>
        </TabPane>
        <TabPane tab={(<span className='tab-text'><LockOutlined/>Change Password</span>)} key="2">
          2nd TAB PANE Content
        </TabPane>
        <TabPane tab={(<span className='tab-text'><CreditCardOutlined/>Billing</span>)} key="3">
          3rd TAB PANE Content
        </TabPane>
        <TabPane tab={(<span className='tab-text'><UnorderedListOutlined />List of User</span>)} key="4">
           <div>
              <div className='wrap-in-add'>
                <Input placeholder="Add name of a user"
                type="text"
                id="name"
                value={clearUserField}
                name="name"
                onChange={handleChange}
                 />
                <Button className='add-btn-in' htmlType='button' type='primary' size={size} onClick={checkNewUser}>ADD</Button>
              </div>
              <div>
              <Title level={3}>List of User</Title>
              </div>
              <div>
              {userDetails.map(
                  (singleName) =>
                     (
                      <div className='name-wrr'>
                          <Title key={singleName.id} className='name-ss' level={5}>{singleName.userName}</Title>
                          <Button id={singleName.id} className='add-btn-in ppd-1' htmlType='button' type='primary' onClick={editItemClick} size={size} >EDIT</Button>
                          <Button id={singleName.id} className='add-btn-in ppd-1' htmlType='button' type='primary' onClick={deleteItemClick} size={size} >DELETE</Button>
                      </div>
                     
                    ),
                )}  
              </div>
              
               {/* { (newUser !== '' && isNewUser) ? <p>{newUser}</p> : '' } */}
           </div>
        </TabPane>
        <TabPane tab={(<span className='tab-text'><BellOutlined/>Notifications</span>)} key="5">
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
            }}
            items={items2}
          />
        </TabPane>
      </Tabs>
      {/* <div>
        <Row>
           <Col span={6}>
          
           </Col>
        </Row>
     
      </div> */}
   </div>
    );
};



export default App;
