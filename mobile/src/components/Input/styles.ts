import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background-color: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  align-items: center;
  flex-direction: row;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #ffff;
  font-size: 15px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
