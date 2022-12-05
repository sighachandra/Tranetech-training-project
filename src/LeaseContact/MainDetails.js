import React,{ useState , useEffect } from 'react';
import { Checkbox, Col, Row } from 'antd';
import { CopyOutlined, UserOutlined, DownOutlined, DeleteOutlined, PlusOutlined} from '@ant-design/icons';
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
    Typography,
    Dropdown
  } from 'antd';
  import { Space, Table, Tag } from 'antd';

  const { TextArea } = Input;
  const { Title } = Typography;




const MainDetails = () => {
  const [userDetails, setUserDetails] = useState([
    {
      key: '1',
    },
    {
      key: '2',
    },
  ]);

  const items = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '2nd menu item',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: '3rd menu item',
      key: '3',
      icon: <UserOutlined />,
    },
  ];
  const menuProps = {
    items,
    // onClick: handleMenuClick,
  };

  const deleteItemClick = event => {
    const cid = Number(event.currentTarget.id);
    const pendingUser = dataSource.filter(
      (item) => Number(item.key) !== cid,
    );
     setUserDetails(pendingUser);
};

const addItem = () => {
  let newAddItem = []; 
  for (let i = 0; i <= userDetails.length; i++) {
    newAddItem.push({key : `${i+1}`});
    setUserDetails(newAddItem);
  }
   
}
 const dataSource = userDetails;

      
      
      const columns = [
        {
          title: 'CHARGE CODE',
          dataIndex: 'chargecode',
          key: 'chargecode',
          render: () => (<Dropdown menu={menuProps}>
            <Button>
              <Space>
                Button
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>),
        },
        {
          title: 'AMOUNT TYPE',
          dataIndex: 'amounttype',
          key: 'amounttype',
          render: () => (<Dropdown menu={menuProps}>
            <Button>
              <Space>
                Amount
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>),
        },
        {
          title: 'AMOUNT(AED)',
          dataIndex: 'amount',
          key: 'amount',
          render: () => (<Input/>),
        },
        {
            title: 'TAX APPLICABILITY',
            dataIndex: 'taxapplicability',
            key: 'taxapplicability',
            render: () => (<Checkbox />),
          },
          {
            title: 'TAX PERCENT',
            dataIndex: 'taxpercent',
            key: 'taxpercent',
            render: () => (<Input/>),
          },
          {
            title: 'TAX AMOUNT (AED)',
            dataIndex: 'taxamount',
            key: 'taxamount',
            render: () => (<Input/>),
          },
          {
            title: 'TOTAL AMOUNT (AED)',
            dataIndex: 'totalamount',
            key: 'totalamount',
            render: () => (<Input/>),
          },
          {
            title: 'DESCRIPTION',
            dataIndex: 'description',
            key: 'description',
            render: () => (<Input/>),
          },
          {
            title: 'ACTION',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => (<Button htmlType='button' id={record.key} onClick={deleteItemClick}><DeleteOutlined className='plus-delete' /></Button>),
          },
      ];
    return(
        <Row>
            <Col span={24}>
                <Form labelCol={{
                      span: 6,
                    }}
                      wrapperCol={{
                      span: 14,
                    }}
                  layout="horizontal"
                  size='default'
                >
                    <Row>
                      <Col span={12}>
                         <Form.Item 
                            label="Property"
                            name="property"
                            className='form-arrange'
                         >
                         <Select>
                            <Select.Option value="demo">Demo</Select.Option>
                         </Select>
                         </Form.Item>
                         <Form.Item
                            label="Property Unit"
                            name="property-unit"
                            className='form-arrange'
                         >
                         <Input suffix={<CopyOutlined className='end-icon-cc'/>}/>
                         </Form.Item>
                         <Form.Item 
                            label="Lease Offer"
                            name="lease-offer"
                            className='form-arrange'
                         >
                         <Input suffix={<CopyOutlined className='end-icon-cc'/>}/>
                         </Form.Item>
                         <Form.Item
                            label="Contract Unit Code"
                            name="unitcode"
                            className='form-arrange'
                            rules={[
                              {
                                required: true,
                                message: 'Please input your username!' 
                              }
                            ]}
                         >
                         <Input />
                         </Form.Item>
                         <Form.Item
                            label="Tenant"
                            name="tenant"
                            className='form-arrange'
                            rules={[
                              {
                                required: true,
                                message: 'Please input your username!' 
                              }
                            ]}
                         >
                         <Input suffix={<CopyOutlined className='end-icon-cc'/>}/>
                         </Form.Item>
                         <Form.Item 
                             label="Contact Details"
                             name="contact"
                             className='form-arrange'
                         >
                         <Select>
                           <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                        </Form.Item>
                        <Form.Item 
                            label="Tenancy Purpose"
                            name="tenancy-purpose"
                            className='form-arrange'
                        >
                        <Select
                            placeholder="Select tenancy purpose"
                        >
                          <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                         <Form.Item 
                            label="Property"
                            name="property"
                            className='form-arrange'
                         >
                         <Select
                            placeholder="Select broker type" 
                         >
                            <Select.Option value="demo">Demo</Select.Option>
                         </Select>
                         </Form.Item>
                         <Form.Item
                            label="Contract Start Date"
                            name="startdate"
                            className='form-arrange'
                            rules={[
                              {
                                required: true,
                                message: 'Please input your username!' 
                              }
                            ]}
                            
                         >
                         <DatePicker className='date-pick' />
                         </Form.Item>
                         <Form.Item
                            label="Contract End Date"
                            name="enddate"
                            className='form-arrange'
                            rules={[
                              {
                                required: true,
                                message: 'Please input your username!' 
                              }
                            ]}
                            
                         >
                         <DatePicker className='date-pick' />
                         </Form.Item>
                         <Form.Item 
                            label="Notes"
                            name="notes"
                            className='form-arrange'
                         >
                         <TextArea rows={2} />
                         </Form.Item>
                         <Form.Item 
                            label="House Allocated to Employee"
                            name="houseAllocated"
                            className='form-arrange'
                         >
                         <Checkbox />
                         </Form.Item>
                         <Form.Item 
                            label="Internal Agreement"
                            name="internal"
                            className='form-arrange'
                         >
                         <Checkbox />
                         </Form.Item>
                         <Form.Item 
                            label="Auto Renewal"
                            name="renewal"
                            className='form-arrange'
                         >
                         <Checkbox />
                         </Form.Item>
                      </Col>
                    </Row>
                  
                </Form>
            </Col>
            <Col span={24}>
                <Title level={3} className='c-s-hh'><span className='charge-details'>CHARGE DETAILS</span></Title>
            </Col>
            <Col span={24} className='table-arr'>
              
               <Table  columns={columns} dataSource={dataSource} pagination={false}/>
               
            </Col>
            <Col span={24} className='plus-arr'>
            <Button htmlType='button' onClick={addItem}><PlusOutlined className='plus-delete'/></Button>
            </Col>
        </Row>
    );
}

export default MainDetails;