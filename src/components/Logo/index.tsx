import React from 'react';
import { DribbbleOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import styled from 'styled-components';

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTitle = styled(Typography.Title)`
  margin: 0 !important;
`;

const StyledIcon = styled(DribbbleOutlined)`
  font-size: 40px;
`;

const Logo = () => (
  <StyledLogo>
    <StyledIcon />
    <StyledTitle level={5}>Ballmap</StyledTitle>
  </StyledLogo>
);

export default Logo;
