import React from 'react';

import {View, Text} from 'react-native';

import {
  Container,
  VStack,
  MenuItem,
  MenuTitle,
  MenuSubTitle,
  Header,
  HeaderIcon,
  HeaderSearch,
  SearchInput,
  SerchHeaderTitle,
  LogoPlaceholder,
  Title,
  HeaderTitle,
  HStack,
  CardNotification,
  Separator,
  SeparatorText,
} from './styles';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '~/styles';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

const Menu = () => (
  <Container>
    {/* <HeaderIcon>
      <LogoPlaceholder>
        <SimpleLineIcons name="grid" size={32} color={colors.secondary} />
      </LogoPlaceholder>
      <Title>Menu</Title>
    </HeaderIcon> */}
    <HeaderSearch>
      <SerchHeaderTitle>Em atendimento</SerchHeaderTitle>
      <SearchInput
        onChangeText={() => {}}
        placeholder="Buscar por descriçaão"
        autoCorrect={false}
        spellCheck={false}
        autoCapitalize="none"
        returnKeyType="done"
        onSubmitEditing={() => {
          // this.secondTextInput.focus();
          // this.onEmailSubmit();
        }}
        blurOnSubmit={false}></SearchInput>
    </HeaderSearch>
    {/* <Header>
      <Material name="chevron-left" size={30} color={colors.white} />
      <HeaderTitle>Atendimento</HeaderTitle>
      <View />
    </Header> */}
    <ScrollView
      contentContainerStyle={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
      }}>
      <MenuItem>
        <HStack marginHorizontal={26} justifyContent="space-between">
          <HStack>
            <SimpleLineIcons name="grid" size={32} color={colors.primary} />
            <VStack>
              <MenuTitle>Pendências</MenuTitle>
              <MenuSubTitle>4 novas</MenuSubTitle>
            </VStack>
          </HStack>
          <View style={{flexDirection: 'row'}}>
            <CardNotification />
            <Material name="chevron-right" size={32} color={colors.subBlack} />
          </View>
        </HStack>
      </MenuItem>
      <MenuItem>
        <HStack marginHorizontal={26} justifyContent="space-between">
          <HStack>
            <SimpleLineIcons name="grid" size={32} color={colors.primary} />
            <VStack>
              <MenuTitle>Atendimento</MenuTitle>
              <MenuSubTitle>4 novas</MenuSubTitle>
            </VStack>
          </HStack>
          <View style={{flexDirection: 'row'}}>
            <CardNotification />
            <Material name="chevron-right" size={32} color={colors.subBlack} />
          </View>
        </HStack>
      </MenuItem>
      <MenuItem />
      <Separator>
        <SeparatorText>Menu atendimento</SeparatorText>
      </Separator>
      <MenuItem />
    </ScrollView>
  </Container>
);

export default Menu;
