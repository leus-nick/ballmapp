import React from 'react';
import { Col, Row } from 'antd';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Feed from './components/Feed';
import Footer from './components/Footer';

const FullHeightRow = styled(Row)`
  height: 100%;
`;

const FullHeightCol = styled(Col)`
  height: 100%;
`;

const App = () => (
  <FullHeightRow>
    <FullHeightCol span={16} offset={4}>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Feed />
        </Route>
        <Route path='/friends'>
          <div>Friends</div>
        </Route>
        <Route path='/places'>
          <div>Places</div>
        </Route>
        <Route path='/groups'>
          <div>Groups</div>
        </Route>
        <Route path='/profile'>
          <div>John Doe Profile</div>
        </Route>
        <Route path='/events'>
          <div>Events</div>
        </Route>
        <Route path='/favorites'>
          <div>Favorites</div>
        </Route>
        <Route path='/activities'>
          <div>Activities</div>
        </Route>
        <Route path='/settings'>
          <div>Settings</div>
        </Route>
      </Switch>
      <Footer />
    </FullHeightCol>
  </FullHeightRow>
);

export default App;
