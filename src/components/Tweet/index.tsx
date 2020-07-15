import React from 'react';

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  ImageContent,
  Description,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Google</strong>
            <span>@google</span>
            <Dot />
            <time>14 de jul</time>
          </Header>

          <Description>Keep going foward</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              12
            </Status>
            <Status>
              <RetweetIcon />
              12
            </Status>
            <Status>
              <LikeIcon />
              12
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
