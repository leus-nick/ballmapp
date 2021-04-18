import React from 'react';
import { Avatar, Button, Input, Layout } from 'antd';
import { MessageOutlined, SettingOutlined, StarOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Logo from '../Logo';

const StyledHeader = styled(Layout.Header)`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSearch = styled(Input.Search)`
  max-width: 500px;
`;

const StyledButtonGroup = styled.div`
  display: flex;
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <StyledButtonGroup>
      <Button type='link'>Home</Button>
      <Button type='link'>Friends</Button>
      <Button type='link'>Playgrounds</Button>
      <Button type='link'>Profile</Button>
    </StyledButtonGroup>
    <StyledSearch />
    <StyledButtonGroup>
      <Button type='link' icon={<MessageOutlined />} />
      <Button type='link' icon={<StarOutlined />} />
      <Button type='link' icon={<SettingOutlined />} />
    </StyledButtonGroup>
    <Avatar size='large' icon={<UserOutlined />} />
  </StyledHeader>
);

export default Header;
