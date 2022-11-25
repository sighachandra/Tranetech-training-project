import React, { useState } from 'react';
import { Button, Checkbox, Form, Input , DatePicker, Select, Upload} from 'antd';
import { Col, Row,  Radio, Tabs, Menu} from 'antd';
import { useDispatch } from 'react-redux/es/exports';
import logo from './logo.svg';
import './App.css';
import {
  UserOutlined,
  LockOutlined,
  CreditCardOutlined,
  BellOutlined,
  LaptopOutlined, 
  NotificationOutlined, 
} from '@ant-design/icons';
import { Avatar } from 'antd';
import { Typography } from 'antd';
import Avatar0 from './Images/empty.jpg';
import Avatar1 from './Images/avatar1.jpg';
import Avatar2 from './Images/avatar2.png';
import Avatar3 from './Images/avatar3.png';
import { setLoading } from './reduxStore/commonReducer';

const { Title } = Typography;
const { TabPane } = Tabs;

const userImages = [Avatar0, Avatar1, Avatar2, Avatar3];

const App = () => {
  const [size, setSize] = useState('large');
  const [user, setUser] = useState(userImages[0]);
  const dispatch = useDispatch();
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
        <TabPane tab={(<span className='tab-text'><BellOutlined/>Notifications</span>)} key="4">
          4th TAB PANE Content
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
