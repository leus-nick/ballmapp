import React from 'react';
import { Col, Layout, Row } from 'antd';
import Header from './components/Header';

const { Content, Footer, Sider } = Layout;

const App = () => (
  <Row>
    <Col span={18} offset={3}>
      <Layout>
        <Header />
        <Layout>
          <Sider>left sidebar</Sider>
          <Content>main content</Content>
          <Sider>right sidebar</Sider>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
    </Col>
  </Row>
);

export default App;
