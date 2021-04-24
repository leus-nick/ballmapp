import React from 'react';
import { Avatar, Badge, Typography } from 'antd';
import styled from 'styled-components';

const Contact = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const BiggerBadge = styled(Badge)`
  & > sup {
    width: 7px;
    height: 7px;
  }
`;

const Name = styled(Typography.Title)`
  &&& {
    margin-bottom: 0;
    margin-left: 10px;
  }
`;

interface ContactProps {
  name: string;
  userId: number;
}

const ContactItem: React.FC<ContactProps> = ({ name, userId }) => {
  const createInitials = (text: string) =>
    text
      .split(' ')
      .map((str) => str.slice(0, 1))
      .join('');

  const checkStatus = (id: number) => {
    if (id % 2) return true;
    return false;
  };

  return (
    <Contact>
      <BiggerBadge status={checkStatus(userId) ? 'success' : undefined} offset={[-3, 27]}>
        <Avatar>{createInitials(name)}</Avatar>
      </BiggerBadge>
      <Name level={5}>{name}</Name>
    </Contact>
  );
};

export default ContactItem;
