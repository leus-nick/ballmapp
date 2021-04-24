import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Badge, Button, Dropdown, Input, Layout } from 'antd';
import { MessageOutlined, NotificationOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Logo from '../Logo';
import SettingsDropdown from '../SettingsDropdown';
import NotificationDropdown from '../NotificationDropdown';

const StyledHeader = styled(Layout.Header)`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.15);
`;

const StyledSearch = styled(Input.Search)`
  max-width: 500px;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  const count = 4;
  return (
    <StyledHeader>
      <Logo />
      <StyledButtonGroup>
        <Link to='/'>
          <Button type='link'>Home</Button>
        </Link>
        <Link to='/friends'>
          <Button type='link'>Friends</Button>
        </Link>
        <Link to='/places'>
          <Button type='link'>Places</Button>
        </Link>
        <Link to='/groups'>
          <Button type='link'>Groups</Button>
        </Link>
      </StyledButtonGroup>
      <StyledSearch />
      <StyledButtonGroup>
        <Dropdown overlay={<SettingsDropdown />} trigger={['click']} placement='bottomCenter'>
          <Button type='link' icon={<MessageOutlined />} />
        </Dropdown>
        <Dropdown overlay={<NotificationDropdown />} trigger={['click']} placement='bottomCenter'>
          <Badge count={count} size='small' offset={[-7, 7]}>
            <Button type='link' icon={<NotificationOutlined />} />
          </Badge>
        </Dropdown>
        <Link to='/settings'>
          <Button type='link' icon={<SettingOutlined />} />
        </Link>
      </StyledButtonGroup>
      <Link to='/profile'>
        <Avatar size='large' icon={<UserOutlined />} />
      </Link>
    </StyledHeader>
  );
};

export default Header;
