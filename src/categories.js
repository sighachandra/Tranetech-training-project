import React, { useState } from 'react';
import HeaderContent from './Header';
import FooterContent from './Footer';
import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;



const Categories = () => {
    const [menuDisplay, setMenuDispaly] = useState('');
    
    const testing = () => {
         setMenuDispaly(true);
    };
   
    const subCategory = [
        {
            id : 1,
      mainItem : 'Electronics',
      subItems :  [
        {
            id : 11,
     listItems : 'Television'
        },
        {
            id : 12,
     listItems : 'Washing-Machine'
        },
        {
            id : 13,
     listItems : 'Refridgrator'
        },
        {
            id : 14,
     listItems : 'Air-Conditioner'
        },
      ]
        },
        {
            id : 2,
      mainItem : 'TVs & Appliances',
      subItems :  [
        {
            id : 21,
     listItems : 'Microwave-oven'
        },
        {
            id : 22,
     listItems : 'Induction-cooker'
        },
        {
            id : 23,
     listItems : 'Chimminey'
        },
        {
            id : 24,
     listItems : 'Water-purifier'
        },
      ]
        },
        {
            id : 3,
      mainItem : 'Men',
      subItems :  [
        {
            id : 31,
     listItems : 'Clothing'
        },
        {
            id : 32,
     listItems : 'Foot-wear'
        },
        {
            id : 33,
     listItems : 'Daily-gadgets'
        },
        {
            id : 34,
     listItems : 'Accessories'
        },
      ]
        },
        {
            id : 4,
      mainItem : 'Women',
      subItems :  [
        {
            id : 41,
     listItems : 'Clothing'
        },
        {
            id : 42,
     listItems : 'Foot-wear'
        },
        {
            id : 43,
     listItems : 'MakeUp/Body products'
        },
        {
            id : 44,
     listItems : 'Bags'
        },
      ]
        },
        {
            id : 5,
      mainItem : 'Baby & Kids',
      subItems :  [
        {
            id : 51,
     listItems : 'Clothing'
        },
        {
            id : 52,
     listItems : 'Baby-products'
        },
        {
            id : 53,
     listItems : 'Baby-food'
        },
        {
            id : 54,
     listItems : 'Accesssories'
        },
      ]
        },
        {
            id : 6,
      mainItem : 'Home & Furniture',
      subItems :  [
        {
            id : 61,
     listItems : 'dfsfsd'
        },
        {
            id : 62,
     listItems : 'dfsfsd'
        },
        {
            id : 63,
     listItems : 'dfsfsd'
        },
        {
            id : 64,
     listItems : 'dfsfsd'
        },
      ]
        },
        {
            id : 7,
      mainItem : 'Baby Care',
      subItems :  [
        {
            id : 71,
     listItems : 'dfsfsd'
        },
        {
            id : 72,
     listItems : 'dfsfsd'
        },
        {
            id : 73,
     listItems : 'dfsfsd'
        },
        {
            id : 74,
     listItems : 'dfsfsd'
        },
      ]
        },
        {
            id : 8,
      mainItem : 'Sports',
      subItems :  [
        {
            id : 81,
     listItems : 'dfsfsd'
        },
        {
            id : 82,
     listItems : 'dfsfsd'
        },
        {
            id : 83,
     listItems : 'dfsfsd'
        },
        {
            id : 84,
     listItems : 'dfsfsd'
        },
      ]
        },

    ];

    const categoryItems = subCategory.map((item, index) =>{
        const key = String(index + 1);
        const indiItem = item.subItems;
        return{
            key: `sub${key}`,
            label: item.mainItem,
            children: indiItem.map((children, j) => { 
                return{
                      key :  `sub${children.id}`,
                    label : children.listItems,
                };    
            }),
        };
    });


    return(

        <Layout>
        <Header className="header header-al-style">
          <HeaderContent/>
        </Header>
           <Layout>
               <Sider>
                  <Menu
                     mode='inline'
                     defaultSelectedKeys={['sub11']}
                     defaultOpenKeys={['sub1']}
                     items={categoryItems}
                     className='tab-text'
                     onClick={testing}
                  />
               </Sider>
               {menuDisplay? <Content
             style={{
                    padding: '0 50px',
                 }}
               >
                 <div>
                    <h1>TESTING OVERLOADED</h1>
                 </div>
               </Content>: <Content
             style={{
                    padding: '0 50px',
                 }}
               >
                 <div>
                    <h1>TESTING</h1>
                 </div>
               </Content>}
           </Layout>

        <Content
       style={{
         padding: '0 50px',
       }}
       >
         
       </Content>

     <Footer className='footer-al-style'>
       <FooterContent/>
     </Footer>
   </Layout>
    );
};


export default Categories;