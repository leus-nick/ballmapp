import React from 'react';
import { Card, Avatar, Typography } from 'antd';
import { CommentOutlined, LikeOutlined, PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const CardAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > h5 {
    margin: 0;
    margin-left: 10px;
  }
`;

interface PostProps {
  time: Date;
  text: string;
}

const Post: React.FC<PostProps> = ({ time, text }) => (
  <Card
    style={{ marginTop: 20 }}
    cover={<img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />}
    actions={[
      <CardAction>
        <LikeOutlined key='like' />
        <Typography.Title level={5}>Like</Typography.Title>
      </CardAction>,
      <CardAction>
        <CommentOutlined key='comment' />
        <Typography.Title level={5}>Comment</Typography.Title>
      </CardAction>,
      <CardAction>
        <PlusOutlined key='repost' />
        <Typography.Title level={5}>Repost</Typography.Title>
      </CardAction>,
    ]}
  >
    <Card.Meta
      avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
      title='John Doe'
    />
    <div className='additional'>
      <p className='price'>{`${time.getDate()} ${time.getMonth()} ${time.getFullYear()}`}</p>
      <p>{text}</p>
    </div>
  </Card>
);

export default Post;
