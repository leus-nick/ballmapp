import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const StyledFooter = styled(Layout.Footer)`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
`;

const Footer = () => <StyledFooter>footer component</StyledFooter>;

export default Footer;
