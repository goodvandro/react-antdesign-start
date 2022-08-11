import React from 'react';
import ReactDOM from 'react-dom/client';
import { Breadcrumb, Layout, Menu } from 'antd';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
        }}
      >
        <div className='logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          items={new Array(3)
            .fill(null)
            .map((_, index) => ({
              key: String(index + 1),
              label: `nav ${index + 1}`,
            }))}
        />
      </Header>
      <Content
        className='site-layout'
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className='site-layout-background'
          style={{ padding: 24, minHeight: 380 }}
        >
          <App />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
