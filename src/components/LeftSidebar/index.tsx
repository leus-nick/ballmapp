import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout } from 'antd';
import styled from 'styled-components';

const Sidebar = styled(Layout.Sider)`
  &&& {
    background-color: transparent;
    flex: 0 0 25% !important;
    max-width: 25% !important;
    min-width: 25% !important;
    width: 25% !important;
  }
`;

const LeftSidebar = () => (
  <Sidebar>
    <ul>
      <li>
        <Link to='/profile'>
          <Button type='link'>John Doe</Button>
        </Link>
      </li>
      <li>
        <Link to='/friends'>
          <Button type='link'>Friends</Button>
        </Link>
      </li>
      <li>
        <Link to='/events'>
          <Button type='link'>Events</Button>
        </Link>
      </li>
      <li>
        <Link to='/groups'>
          <Button type='link'>Groups</Button>
        </Link>
      </li>
      <li>
        <Link to='/favorites'>
          <Button type='link'>Favorites</Button>
        </Link>
      </li>
      <li>
        <Link to='/places'>
          <Button type='link'>Places</Button>
        </Link>
      </li>
      <li>
        <Link to='/activities'>
          <Button type='link'>Activities</Button>
        </Link>
      </li>
    </ul>
  </Sidebar>
);

export default LeftSidebar;
