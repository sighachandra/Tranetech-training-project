import React, { useState } from 'react';
import './App.css';
import App from './App';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import HeaderContent from './Header';
import FooterContent from './Footer';
const { Header, Content, Footer, Sider } = Layout;



const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
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

const NewApp = () => {

    return(
        <Layout>
           <Header className="header header-al-style">
             <HeaderContent/>
           </Header>


           <Content
          style={{
            padding: '0 50px',
          }}
          >
            <App/>
          </Content>

        <Footer className='footer-al-style'>
          <FooterContent/>
        </Footer>
      </Layout>
    );

};


export default NewApp;