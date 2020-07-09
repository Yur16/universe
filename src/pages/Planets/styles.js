import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #000;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  padding: 15px;
`;
export const List = styled.ScrollView.attrs({
  horizontal: true,

})`
  max-height: 150px;
`;
export const Item = styled.TouchableOpacity`
  margin-right: 10px;
  padding: 10px;
  border-radius: 15px;
  width: 100px;
  height: 100px;
`;
export const Planet = styled.Image`
  flex: 1;
`;