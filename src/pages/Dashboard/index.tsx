import React, { Component } from 'react';
import { Layout, Menu, Carousel } from 'antd';

const { Header, Content, Footer } = Layout;

class Dashboard extends Component {
  render() {
    return (
      <Layout className="layout" style={{ height: '100%' }}>
        <Header style={{ backgroundColor: '#34495e' }} >
          <div className="logo" />
          <Menu style={{ backgroundColor: '#34495e' }} mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item style={{ color: '#eee', float: 'right' }} key="1">nav 1</Menu.Item>
            <Menu.Item style={{ color: '#eee', float: 'right' }} key="2">nav 2</Menu.Item>
            <Menu.Item style={{ color: '#eee', float: 'right' }} key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 300px', height: '100%' }}>
          <Carousel autoplay draggable>
            <div>
              <h3 style={{ height: '500px', backgroundColor: 'red' }}>1</h3>
            </div>
            <div> 
              <h3 style={{ height: '500px', backgroundColor: 'blue' }}>2</h3>
            </div>
            <div>
              <h3 style={{ height: '500px', backgroundColor: 'black' }}>3</h3>
            </div>
            <div>
              <h3 style={{ height: '500px', backgroundColor: 'green' }}>4</h3>
            </div>
          </Carousel>
        </Content>
        <Footer style={{ textAlign: 'center', position: 'fixed', bottom: '0', width: '100%' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default Dashboard;
