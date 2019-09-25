import React from 'react';

import {
  Container,
  HStack,
  VStack,
  ComponentPlaceholder,
  Title,
  RoundLogo,
  Subtitle,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../../../../assets/Nubank_Logo.png';

export default function Header() {
  return (
    <Container>
      <HStack>
        <ComponentPlaceholder />
        <VStack>
          <Title>Marcia Ferreira</Title>
          <Subtitle>Escola Marshmallow</Subtitle>
        </VStack>
        <RoundLogo />
      </HStack>
    </Container>
  );
}
