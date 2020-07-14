import React, { useState } from 'react';

import { Container, Title, List, Item, Planet } from './styles';

import Description from '../../components/description';

import { loadPlanets } from '../../services/api';

export default function Planets() {
  const [selectedItem, setItem] = useState(0);
  const data = loadPlanets();

  function handleSelect(selected) {
    setItem(selected);
  }

  return (
    <Container>
      <Title>Descubra o infinito do universo</Title>
      <List>
        {data.map((planet, index) => (
          <Item 
            key={planet.name} 
            onPress={() => handleSelect(index)}
            isSelected={selectedItem === index ? true : false}  
          >
            <Planet source={{
              uri: planet.icon,
            }} />
          </Item>
        ))}
      </List>
      
      <Description data={data[selectedItem]} />
    </Container>
  );
}