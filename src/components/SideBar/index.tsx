import React from 'react';
import StickyBox from 'react-sticky-box';

import { Container, SearchWrapper, SearchInput, Body, SearchIcon } from './styles';
import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder='Buscar no Twitter' />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List 
            title='Talvez você curta'
            elements={[
            <FollowSugestion
              name='William Rizzi'
              nickname='@rizzada'
            />,
            <FollowSugestion
              name='Luan Wink'
              nickname='@albertada'
            />,
            <FollowSugestion
              name='Leonardo Alvez'
              nickname='@alvezada'
            />
          ]}/>
          <List 
            title='Novidades'
            elements={[
              <News />,
              <News />,
              <News />
            ]}/>
            <List 
          title='Novidades'
          elements={[
            <News />,
            <News />,
            <News />
          ]}/>
            <List 
          title='Novidades'
          elements={[
            <News />,
            <News />,
            <News />
          ]}/>
            <List 
          title='Novidades'
          elements={[
            <News />,
            <News />,
            <News />
          ]}/>
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;