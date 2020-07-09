import React from 'react';

import { Container, Title, List, Item, Planet } from './styles';

import Description from '../../components/description';

export default function Planets() {
  return (
    <Container>
      <Title>Descubra o infinito do universo</Title>
      <List>
        <Item>
          <Planet source={{
            uri: 'https://www.flaticon.com/br/premium-icon/icons/svg/1146/1146292.svg',
          }} />
        </Item>
        <Item>
          <Planet source={{
            uri: 'https://www.flaticon.com/br/premium-icon/icons/svg/1146/1146292.svg',
          }} />
        </Item>
        <Item>
          <Planet source={{
            uri: 'https://www.flaticon.com/br/premium-icon/icons/svg/1146/1146292.svg',
          }} />
        </Item>
        <Item>
          <Planet source={{
            uri: 'https://www.flaticon.com/br/premium-icon/icons/svg/1146/1146292.svg',
          }} />
        </Item>
        
      </List>
      
      <Description />
    </Container>
  );
}