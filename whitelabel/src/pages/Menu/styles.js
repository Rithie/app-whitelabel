import styled from 'styled-components/native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '~/styles';

const screenHeight = Math.round(Dimensions.get('window').height);
const φ = (1 + Math.sqrt(5)) / 2; // golden ratio

export const HEADER_HEIGHT = screenHeight * (1 - 1 / φ);

export const Container = styled.View`
  display: flex;
  background: ${colors.white};
  flex: 1;
`;

export const Header = styled.View`
  display: flex;
  width: 100%;
  height: ${HEADER_HEIGHT / 3}px;
  ...ifIphoneX({paddingTop: 50}, {paddingTop: 20});
  background: ${colors.primary};
  z-index: 100;
  justify-content: space-between;
  padding: 16px 15px;
  align-items: flex-end;
  flex-direction: row;
`;

export const HeaderTitle = styled.Text`
  color: ${colors.secondary};
  font-weight: 600;
  font-size: 20px;
`;

export const HeaderIcon = styled.View`
  display: flex;
  width: 100%;
  height: ${HEADER_HEIGHT / 3}px;
  ...ifIphoneX({paddingTop: 50}, {paddingTop: 20});
  background: ${colors.primary};
  z-index: 100;
`;

export const HeaderSearch = styled.View`
  display: flex;
  width: 100%;
  height: ${HEADER_HEIGHT / 3}px;
  ...ifIphoneX({paddingTop: 50}, {paddingTop: 20});
  background: ${colors.primary};
  z-index: 100;
`;

export const SerchHeaderTitle = styled.Text`
  color: ${colors.secondary};
  font-weight: 600;
  font-size: 20px;
  position: absolute;
  bottom: 30;
  align-self: center;
`;

export const SearchInput = styled.TextInput`
  border-width: 1px;
  background: ${colors.white};
  border-color: ${colors.softWhite};
  padding: 10px;
  border-radius: 5px;
  margin: 24px 0px 0px 0px;
  position: absolute;
  bottom: -15;

  width: 90%;
  border-radius: 20px;
  box-shadow: 2px 2px 15px rgba(194, 194, 194, 0.4);
  align-self: center;
  color: ${colors.subBlack};
`;

export const LogoPlaceholder = styled.View`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  position: absolute;
  bottom: -45;
  left: 16;
  background: ${colors.primary};
  justify-content: center;
  align-items: center;
  border: 10px solid #fff;
`;

export const Title = styled.Text`
  color: ${colors.secondary};
  font-weight: 600;
  font-size: 20px;
  position: absolute;
  bottom: 10;
  left: 120;
`;

// menu list

export const MenuItem = styled.TouchableOpacity(props => ({
  width: '100%',
  height: 70,
  background: colors.white,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 1,
  paddingVertical: 5,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: '#d1d1d1',
}));

export const MenuTitle = styled.Text`
  color: ${colors.secondary};
  font-weight: 600;
  font-size: 20px;
  color: ${colors.black};
`;

export const MenuSubTitle = styled.Text`
  color: ${colors.secondary};
  font-weight: 400;
  font-size: 18px;
  color: ${colors.subBlack};
`;

export const VStack = styled.View`
  margin-left: 20px;
`;

export const SeparatorText = styled.Text`
  color: ${colors.subBlack};
`;

export const Separator = styled.View`
  justify-content: center;
  align-items: flex-start;
  height: 30px;
  width: 100%;
  padding: 5px 16px;
  background: ${colors.softWhite};
`;

export const HStack = styled.View(props => ({
  justifyContent: props.justifyContent,
  alignItems: 'center',
  flexDirection: 'row',
  paddingVertical: 5,
  marginHorizontal: props.marginHorizontal,
  flex: 1,
}));

export const CardNotification = styled.View(props => ({
  backgroundColor: props.color ? props.color : '#DF1717',
  alignSelf: props.alignSelf ? props.alignSelf : 'center',
  width: 5,
  height: 5,
  borderRadius: 2.5,
}));
