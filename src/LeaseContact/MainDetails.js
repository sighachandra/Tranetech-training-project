import React from 'react';
import { Checkbox, Col, Row } from 'antd';
import { CopyOutlined} from '@ant-design/icons';
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
    Typography
  } from 'antd';
  import { Space, Table, Tag } from 'antd';

  const { TextArea } = Input;
  const { Title } = Typography;




const MainDetails = () => {

    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'CHARGE CODE',
          dataIndex: 'chargecode',
          key: 'chargecode',
        },
        {
          title: 'AMOUNT TYPE',
          dataIndex: 'amounttype',
          key: 'amounttype',
        },
        {
          title: 'AMOUNT(AED)',
          dataIndex: 'amount',
          key: 'amount',
        },
        {
            title: 'TAX APPLICABILITY',
            dataIndex: 'taxapplicability',
            key: 'taxapplicability',
          },
          {
            title: 'TAX PERCENT',
            dataIndex: 'taxpercent',
            key: 'taxpercent',
          },
          {
            title: 'TAX AMOUNT (AED)',
            dataIndex: 'taxamount',
            key: 'taxamount',
          },
          {
            title: 'DESCRIPTION',
            dataIndex: 'description',
            key: 'description',
          },
          {
            title: 'ACTION',
            dataIndex: 'action',
            key: 'action',
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
                         >
                         <Select>
                            <Select.Option value="demo">Demo</Select.Option>
                         </Select>
                         </Form.Item>
                         <Form.Item
                            label="Property Unit"
                            name="property-unit"
                         >
                         <Input suffix={<CopyOutlined />}/>
                         </Form.Item>
                         <Form.Item 
                            label="Lease Offer"
                            name="lease-offer"
                         >
                         <Input suffix={<CopyOutlined />}/>
                         </Form.Item>
                         <Form.Item
                            label="Contract Unit Code"
                            name="unitcode"
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
                            rules={[
                              {
                                required: true,
                                message: 'Please input your username!' 
                              }
                            ]}
                         >
                         <Input suffix={<CopyOutlined />}/>
                         </Form.Item>
                         <Form.Item 
                             label="Contact Details"
                             name="contact"
                         >
                         <Select>
                           <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                        </Form.Item>
                        <Form.Item 
                            label="Tenancy Purpose"
                            name="tenancy-purpose"
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
                         >
                         <TextArea rows={2} />
                         </Form.Item>
                         <Form.Item 
                            label="House Allocated to Employee"
                            name="houseAllocated"
                         >
                         <Checkbox />
                         </Form.Item>
                         <Form.Item 
                            label="Internal Agreement"
                            name="internal"
                         >
                         <Checkbox />
                         </Form.Item>
                         <Form.Item 
                            label="Auto Renewal"
                            name="renewal"
                         >
                         <Checkbox />
                         </Form.Item>
                      </Col>
                    </Row>
                  
                </Form>
            </Col>
            <Col span={24}>
                <Title level={3}><span className='charge-details'>CHARGE DETAILS</span></Title>
            </Col>
            <Col span={24}>
               <Table  columns={columns} />
               {/* dataSource={dataSource} */}
            </Col>
        </Row>
    );
}

export default MainDetails;