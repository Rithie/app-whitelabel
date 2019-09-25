import React from 'react';

// import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  NavSubText,
  SignOutButtonText,
} from './styles';

export default function Menu({translateY}) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}>
      <Nav>
        <NavItem>
          <NavText>20</NavText>
          <NavSubText>Envios</NavSubText>
        </NavItem>
        <NavItem>
          <NavText>15</NavText>
          <NavSubText>Visualizaçoøes</NavSubText>
        </NavItem>
        <NavItem>
          <NavText>07</NavText>
          <NavSubText>Respostas</NavSubText>
        </NavItem>
        <NavItem>
          <NavText>75%</NavText>
          <NavSubText>Engajamento</NavSubText>
        </NavItem>
      </Nav>
    </Container>
  );
}
