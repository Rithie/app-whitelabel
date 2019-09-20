import * as React from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';
import {constants} from '~/styles';

// You can import from local files
import {
  Layer,
  ScrollArea,
  Header,
  TextHeader,
  LogoButton,
  Row,
  HeaderIcons,
  HeaderTitle,
} from './styles';

import {colors} from '~/styles';
import MenuItem from './components/MenuItem';
import CardAtendimento from './components/CardAtendimento';
import Conversas from './components/Conversas';
import PortalProfessor from './components/PortalProfessor';
import Eventos from './components/Eventos';
import Status from './components/Status';
import Rascunho from './components/Rascunho';

export default class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <Row>
          <TextHeader>Olá Marcia!</TextHeader>
          <LogoButton>
            <Image
              style={{
                width: 33,
                height: 33,
                borderRadius: 16.5,
                alignSelf: 'center',
              }}
              source={{
                uri:
                  'https://facebook.github.io/react-native/img/tiny_logo.png',
              }}
            />
          </LogoButton>
        </Row>
        <Header>
          <HeaderTitle>Últimas menasgens enviadas</HeaderTitle>
          <HeaderIcons>
            <MenuItem value={20} label="Envios" fixedValue />
            <MenuItem fixedValue value={15} label="Visualizações" />
            <MenuItem fixedValue value={7} label="Respostas" />
            <MenuItem fixedValue value={75} label="Engajamento" indicador="%" />
          </HeaderIcons>
        </Header>
        <Layer>
          <ScrollArea>
            <Status />
            <Rascunho />
            <CardAtendimento />
            <Conversas />
            <Eventos />
            <PortalProfessor />
          </ScrollArea>
        </Layer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: constants.statusBarHeight,
    backgroundColor: colors.primary,
  },
});
