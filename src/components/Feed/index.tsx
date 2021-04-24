import React, { useState, useEffect } from 'react';
import { Layout, Spin } from 'antd';
import styled from 'styled-components';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import Post from '../Post';

const TransparentLayout = styled(Layout)`
  background-color: transparent;
  flex-grow: 1;
  display: flex;
`;

const Cont = styled(Layout.Content)`
  padding: 10px;
`;

interface PropsPost {
  id: number;
  title: string;
  body: string;
}

const Feed = () => {
  const [posts, setPosts] = useState<PropsPost[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.cypress.io/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts([...posts, ...data]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPosts]);

  if (!posts.length) {
    return <Spin size='large' />;
  }

  return (
    <TransparentLayout>
      <LeftSidebar />
      <Cont>
        {posts.map((post: PropsPost) => (
          <Post key={`post_${post.id}`} time={new Date()} text={post.body} />
        ))}
      </Cont>
      <RightSidebar />
    </TransparentLayout>
  );
};

export default Feed;
