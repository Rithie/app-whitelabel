import {Animated, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  background: #4386ec;
  align-items: center;
  justify-content: center;
`;

export const Code = styled.View`
  padding: 10px 0;
  align-self: center;
  overflow: hidden;
`;

export const Nav = styled.View`
  flex-direction: row;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const NavItem = styled.View`
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

export const NavSubText = styled.Text`
  font-size: 10px;
  color: #fff;
  text-align: center;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;
