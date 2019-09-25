import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

// Styled SafeArea iPhoneX e outros for bugs
// Evita-se o uso de Tricks para manter o layout ao rotacionar
export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: #5299fa;
`;

export const Container = styled.View`
  flex: 1;
  background: #488FF9;
  /* Não necessário o uso */
  /* padding-top: ${getStatusBarHeight()}px; */
  justify-content: flex-start;
`;

export const Content = styled.View`
  flex: 1;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #f8f8f9;
  margin: 0 0px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(128, 128, 128, 0.37);
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #999;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

export const CardFooter = styled.View`
  padding: 30px;
  background: #eee;
  border-radius: 4px;
`;

export const Annotation = styled.Text`
  font-size: 12px;
  color: #333;
`;
