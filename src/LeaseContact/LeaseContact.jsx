import React, { useState } from 'react';
import { Layout } from 'antd';
import LeaseContactHeader from './LeaseContactHeader';
import MainDetails from './MainDetails';

const { Header, Footer, Sider, Content } = Layout;



const LeaseContact = () => {
    return(
        <Layout>
      <Header className='lease-Header-Base'>
         <LeaseContactHeader/>
      </Header>
      <Content className='content-spacing'>
        <MainDetails/>
      </Content>
      <Footer></Footer>
    </Layout>
    );
}

export default LeaseContact;