import {Animated, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  align-items: center;
  padding: 20px 6px;
  height: 90px;
`;

export const HStack = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 10px;
  display: flex;
  margin: 0px 16px;
`;

export const VStack = styled.View`
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const RoundLogo = styled(Animated.Image)`
  width: 45;
  height: 45;
  border-radius: 22;
  background: #d1d1d1;
`;

export const ComponentPlaceholder = styled.View``;

export const Logo = styled.Image``;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  margin-left: 8px;
`;

export const Subtitle = styled(Animated.Text)`
  font-size: 12;
  color: #fff;
  font-weight: 400;
  margin-left: 8px;
`;
