import React from 'react';
import { Text } from 'react-native';

import { Container, Name, Attribute, Value, More } from './styles';

export default function Description() {

	const data = [ 1, 2, 3, 4, 5, 6 ];

  return (
    <Container>
    	<Name>Marte</Name>

    	<Attribute>
				<Text style={{fontSize: 18, color: '#fff'}}>
					Duração do dia:
				</Text>
				<Value>Value</Value>
			</Attribute>
			<Attribute>
				<Text style={{fontSize: 18, color: '#fff'}}>
					Duração do ano:
				</Text>
				<Value>Value</Value>
			</Attribute>
			<Attribute>
				<Text style={{fontSize: 18, color: '#fff'}}>
					Gravidade:
				</Text>
				<Value>Value</Value>
			</Attribute>
			<Attribute>
				<Text style={{fontSize: 18, color: '#fff'}}>
					Temperatura media:
				</Text>
				<Value>Value</Value>
			</Attribute>
			
			
			<Text style={{fontSize: 22, color: '#fff', fontWeight: 'bold', marginTop: 30}}>
				Mais informações
			</Text>

    	<More>
    		Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.
    	</More>   	
    </Container>
  ); 
}