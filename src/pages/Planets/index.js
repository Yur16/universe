import React from 'react';

import { Container, Title, List, Item, Planet } from './styles';

import Description from '../../components/description';

import { loadPlanets } from '../../services/api';

export default function Planets() {

  const data = loadPlanets();

  return (
    <Container>
      <Title>Descubra o infinito do universo</Title>
      <List>
        {data.map(planet => (
          <Item key={planet.name}>
            <Planet source={{
              uri: planet.icon,
            }} />
          </Item>
        ))}
      </List>
      
      <Description />
    </Container>
  );
}