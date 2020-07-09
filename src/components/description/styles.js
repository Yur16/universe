import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const More = styled.Text`
	color: #fff;
	padding: 15px;
	text-align: justify;
`;
export const Name = styled.Text`
	font-size: 22px;
	font-weight: bold;

	color: #fff;
	align-self: center;
`;
export const Table = styled.FlatList.attrs({
	contentContainerStyle: {padding: 15},
})``;
export const Property = styled.View`
	width: 45%;
	margin: 10px
`; 
export const Subtitle = styled.Text`
	color: #fff;
	font-size: 16px;
	font-weight: bold;
`;
export const CountView = styled.View`
	background: #8823EE;
	padding: 8px;
	border-radius: 4px;
`;
export const Count = styled.Text`
	color: #fff;
	font-size: 16px;
`;