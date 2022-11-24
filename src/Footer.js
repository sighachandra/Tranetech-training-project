import React, { useState } from 'react';
import './App.css';
import { Col, Row, List, Typography} from 'antd';
  
const { Title } = Typography;

const FooterContent = () => {

    return(
        <Row>
            <Col span={8}>
               <List>
                  <List.Item>
                     <Title level={4}>FOLLOW US</Title>
                  </List.Item>
                  <List.Item>Lorem Ipsum</List.Item>
                  <List.Item>Lorem Ipsum</List.Item>
                  <List.Item>Lorem Ipsum</List.Item>
               </List>
            </Col>
            <Col span={8}>
            <List>
                  <List.Item>
                     <Title level={4}>OVERVIEW</Title>
                  </List.Item>
                  <List.Item>Lorem Ipsum</List.Item>
                  <List.Item>Lorem Ipsum</List.Item>
                  <List.Item>Lorem Ipsum</List.Item>
               </List>
            </Col>
            <Col span={8}>
            <List>
                  <List.Item>
                     <Title level={4}>COMMUNITY</Title>
                  </List.Item>
                  <List.Item>Lorem Ipsum</List.Item>
                  <List.Item>Lorem Ipsum</List.Item>
                  <List.Item>Lorem Ipsum</List.Item>
               </List>
            </Col>
        </Row>
    );

};


export default FooterContent;