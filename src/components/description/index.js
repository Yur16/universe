import React from 'react';
import { Text } from 'react-native';

import { Container, Name, Attribute, Value, More } from './styles';

export default function Description({ data }) {

  return (
    <Container>
    	<Name>{data.name}</Name>

    	<Attribute>
				<Text style={{fontSize: 18, color: '#fff'}}>
					Duração do dia:
				</Text>
				<Value>{data.day}</Value>
			</Attribute>
			<Attribute>
				<Text style={{fontSize: 18, color: '#fff'}}>
					Duração do ano:
				</Text>
				<Value>{data.year}</Value>
			</Attribute>
			<Attribute>
				<Text style={{fontSize: 18, color: '#fff'}}>
					Gravidade:
				</Text>
				<Value>{data.gravity}</Value>
			</Attribute>
			<Attribute>
				<Text style={{fontSize: 18, color: '#fff'}}>
					Temperatura media:
				</Text>
				<Value>{data.temperature}</Value>
			</Attribute>
			
			
			<Text style={{fontSize: 22, color: '#fff', fontWeight: 'bold', marginTop: 30}}>
				Mais informações
			</Text>

    	<More>
    		{data.description}
    	</More>   	
    </Container>
  ); 
}