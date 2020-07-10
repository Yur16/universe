import React from 'react';

import { Container, Title, List, Item, Planet } from './styles';

import Description from '../../components/description';

import { loadPlanets } from '../../services/api';

export default function Planets() {

  const data = loadPlanets();
  console.log(data);

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