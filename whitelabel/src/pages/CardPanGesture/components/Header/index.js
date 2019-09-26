import React from 'react';
import {Animated, Text, StyleSheet} from 'react-native';
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

export default function Header({translateY}) {
  return (
    <Container
      style={{
        height: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [80, 90],
        }),
      }}>
      <HStack>
        <HStack
          style={{
            transform: [
              {
                translateX: translateY.interpolate({
                  inputRange: [0, 380],
                  outputRange: [-80, 20],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <ComponentPlaceholder />
          <VStack>
            <Animated.Text
              style={[
                {color: '#fff', fontWeight: 'bold', marginLeft: 10},
                {
                  fontSize: translateY.interpolate({
                    inputRange: [0, 150],
                    outputRange: [22, 22],
                    extrapolate: 'clamp',
                  }),
                  transform: [
                    {
                      translateY: translateY.interpolate({
                        inputRange: [0, 150],
                        outputRange: [10, 0],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                },
              ]}>
              Marcia Ferreira
            </Animated.Text>
            <Subtitle
              style={{
                opacity: translateY.interpolate({
                  inputRange: [0, 150],
                  outputRange: [0, 1],
                }),
              }}>
              Escola Marshmallow
            </Subtitle>
          </VStack>
        </HStack>
        <ComponentPlaceholder>
          <RoundLogo
            source={{uri: 'https://picsum.photos/id/237/50/50'}}
            style={{
              opacity: translateY.interpolate({
                inputRange: [0, 380],
                outputRange: [1, 0],
              }),
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [0, 120],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          />
        </ComponentPlaceholder>
      </HStack>
    </Container>
  );
}
