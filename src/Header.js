import React, { useState } from 'react';
import './App.css';
import { Col, Row, Tabs, Button} from 'antd';
import logo from './Images/logo-newAPP.jpg';

const { TabPane } = Tabs;
const HeaderContent = () => {
    const [size, setSize] = useState('large');
    return(
        <Row>
            <Col span={6}>
                <div className='logo-wrap-div'>
                  <img src={logo} className='logo-img' alt="Logo" />
                </div>
            </Col>
            <Col span={12}>
              <div className='header-tab-style'>
                <Tabs   tabPosition="top">
                  <TabPane tab={(<span className='tab-text'>PRODUCT</span>)} key="1"></TabPane>
                  <TabPane tab={(<span className='tab-text'>CATEGORIES</span>)} key="2"></TabPane>
                  <TabPane tab={(<span className='tab-text'>ABOUT US</span>)} key="3"></TabPane>
                  <TabPane tab={(<span className='tab-text'>CONTACT</span>)} key="4"></TabPane>
                </Tabs>
              </div>
            </Col>
            <Col span={6}>
                <div className='sign-up-btn-wrap'>
                    <Button className='sign-up-btn' type='primary' size={size}>Log In</Button>
                    <Button className='sign-up-btn' type='primary' size={size}>Sign Up</Button>
                </div>
            </Col>
        </Row>
    );

};


export default HeaderContent;