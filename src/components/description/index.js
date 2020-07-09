import React from 'react';
import { Text } from 'react-native';

import { Container, Name, Table, Property, Subtitle, CountView, Count, More } from './styles';

export default function Description() {

	const data = [ 1, 2, 3, 4, 5, 6 ];

  return (
    <Container>
    	<Name>Marte</Name>

    	<Table
			  data={data}
			  renderItem={({ item }) => (
			    <Property>
			    	<Subtitle>Peso</Subtitle>
			    	<CountView>
			      	<Count>100kg</Count>
			      </CountView>
			    </Property>
			  )}
			  //Setting the number of column
			  numColumns={2}
			  keyExtractor={(item, index) => index.toString()}
			/>
			
			<Text style={{fontSize: 22, color: '#fff', fontWeight: 'bold', marginLeft: 15}}>
				Mais informações
			</Text>

    	<More>
    		Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.
    	</More>   	
    </Container>
  ); 
}