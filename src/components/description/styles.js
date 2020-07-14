import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex: 1;
	padding: 15px;
`;
export const Name = styled.Text`
	font-size: 28px;
	font-weight: bold;

	color: #fff;
	align-self: center;
`;
export const Attribute = styled.View`
	padding: 10px 30px 10px 10px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	margin-top: 10px;

	border: ${StyleSheet.hairlineWidth}px solid #fff;
	border-radius: 8px;
`
export const Value = styled.Text`
	color: #ae80ff;
	font-size: 20px;
	margin-left: 15px;
	font-weight: bold;
`;
export const More = styled.Text`
	font-size: 16px;
	margin-top: 8px;
	color: #fff;
	text-align: justify;
`;