import React, { useEffect, useState } from 'react';
import { Layout, Typography } from 'antd';
import styled from 'styled-components';
import ContactItem from '../ContactItem';

const Sidebar = styled(Layout.Sider)`
  &&& {
    background-color: transparent;
    flex: 0 0 25% !important;
    max-width: 25% !important;
    min-width: 25% !important;
    width: 25% !important;
  }
`;

const List = styled.ul`
  list-style-type: none;
`;

interface User {
  name: string;
  id: number;
}

const RightSidebar = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.cypress.io/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers([...users, ...data]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setUsers]);

  return (
    <Sidebar>
      <Typography.Title level={4}>Contacts</Typography.Title>
      <List>
        {users.map((user: User) => (
          <li key={`list-item-${user.id}`}>
            <ContactItem name={user.name} userId={user.id} />
          </li>
        ))}
      </List>
    </Sidebar>
  );
};

export default RightSidebar;
