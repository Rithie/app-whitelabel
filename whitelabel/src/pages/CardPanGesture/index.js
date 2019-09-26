import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Animated, View} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import Header from './components/Header';
import Tabs from './components/Tabs';
import Menu from './components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
  SafeAreaView,
} from './styles';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);

  useEffect(
    () =>
      Animated.timing(translateY, {
        toValue: 380,
        duration: 150,
      }).start(() => {}),
    [],
  );

  const animatedEvent = Animated.event([
    {
      nativeEvent: {
        translationY: translateY,
      },
    },
  ]);

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 100,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <SafeAreaView>
      <Container>
        <Header translateY={translateY} />
        <Content>
          <Menu translateY={translateY} />

          <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChanged}>
            <Card
              style={{
                transform: [
                  {
                    translateY: translateY.interpolate({
                      inputRange: [-5, 0, 280],
                      outputRange: [-5, 0, 60],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  flex: 1,
                  height: 100,
                  marginHorizontal: 10,
                  marginTop: 10,
                  shadowColor: 'rgba(128, 128, 128, 0.5);',
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.34,
                  shadowRadius: 6.27,
                  elevation: 10,
                }}></View>
              <View
                style={{
                  backgroundColor: '#f9f9f9',
                  borderRadius: 10,
                  flex: 2,
                  height: 100,
                  marginHorizontal: 10,
                  marginTop: 10,
                  shadowColor: 'rgba(128, 128, 128, 0.5);',
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.34,
                  shadowRadius: 6.27,
                  elevation: 10,
                }}></View>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  flex: 1,
                  height: 100,
                  marginHorizontal: 10,
                  marginVertical: 10,
                  shadowColor: 'rgba(128, 128, 128, 0.5);',
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.34,
                  shadowRadius: 6.27,
                  elevation: 10,
                }}></View>
              {/* <CardHeader>
                <View></View>
                <View></View>
              </CardHeader>
              <CardContent>
                <Title>Saldo disponível</Title>
                <Description>R$ 197.611,65</Description>
              </CardContent>
              <CardFooter>
                <Annotation>
                  Transferência de R$ 20,00 recebida de Diego Schell Fernandes
                  hoje às 06:00h
                </Annotation>
              </CardFooter>
              <CardFooter>
                <Annotation>
                  Transferência de R$ 20,00 recebida de Diego Schell Fernandes
                  hoje às 06:00h
                </Annotation>
              </CardFooter>
              <CardFooter>
                <Annotation>
                  Transferência de R$ 20,00 recebida de Diego Schell Fernandes
                  hoje às 06:00h
                </Annotation>
              </CardFooter> */}
            </Card>
          </PanGestureHandler>
        </Content>
      </Container>
    </SafeAreaView>
  );
}
