import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { LeftOutlined, HomeOutlined, SearchOutlined, BellOutlined, QuestionOutlined} from '@ant-design/icons';
import { Typography } from 'antd';
import { Tabs } from 'antd';

const { Title } = Typography;




const LeaseContactHeader = () => {
    return(
       <Row>
         <Col className='header-blue-clr head1-height' span={24}>
            <Row>
               <Col span={6}>
                <Row>
                  <Col span={8}>
                    <Row>
                       <Col span={8}><LeftOutlined className='icon-sizing-header'/></Col>
                       <Col span={8}><HomeOutlined className='icon-sizing-header' /></Col>
                       <Col span={8}><SearchOutlined className='icon-sizing-header' /></Col>
                    </Row>
                  </Col>
                  <Col span={16}>
                    <Title className='logged-user-h' level={4}>Logged in as a lease Admin</Title>
                  </Col>
                </Row>
              </Col>
              <Col className='add-lease-cc' span={12}>
                <Title className='logged-user-h' level={4}>Add Lease Contract</Title>
              </Col>
              <Col span={6}>
               <Row>
                 <Col span={18}></Col>
                 <Col span={6}>
                  <Row>
                    <Col span={8}></Col>
                    <Col span={8}><QuestionOutlined className='icon-sizing-header'/></Col>
                    <Col span={8}><BellOutlined className='icon-sizing-header'/></Col>
                  </Row>
                </Col>
               </Row>
             </Col>
            </Row>
            </Col>
            <Col span={24}>
                <Title className='new-lease' level={4}>New Lease Contract</Title>
            </Col>
            <Col className='header-blue-clr' span={24}>
               <Tabs className='tab-style' defaultActiveKey="1">
                  <Tabs.TabPane tab={(<span className='tab-indi-style'>MAIN DETAILS</span>)} key="1"></Tabs.TabPane>
                  <Tabs.TabPane tab={(<span className='tab-indi-style'>CHARGE DETAILS</span>)} key="2"></Tabs.TabPane>
                  <Tabs.TabPane tab={(<span className='tab-indi-style'>SPLIT PAYMENT DETAILS</span>)} key="3"></Tabs.TabPane>
                  <Tabs.TabPane tab={(<span className='tab-indi-style'>PARKING DETAILS</span>)} key="4"></Tabs.TabPane>
                  <Tabs.TabPane tab={(<span className='tab-indi-style'>DOCUMENTS SECTION</span>)} key="5"></Tabs.TabPane>
                  <Tabs.TabPane tab={(<span className='tab-indi-style'>ADDITIONAL DETAILS</span>)} key="6"></Tabs.TabPane>
               </Tabs>
            </Col>
        </Row>
        
    );
}

export default LeaseContactHeader;