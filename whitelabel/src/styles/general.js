import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {colors} from '~/styles';

export const CardContainer = styled.View(props => ({
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
  backgroundColor: colors.white,
  borderRadius: 10,
  marginTop: 15,
  marginBottom: 0,
  marginLeft: 16,
  marginRight: 16,
  paddingVertical: 16,
  paddingHorizontal: 5,
  shadowColor: 'rgba(194, 194, 194, 0.3);',
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,
  elevation: 10,
}));

export const CardTitle = styled.Text`
  color: ${colors.black};
  font-weight: 600;
  font-size: 15px;
`;

export const CardSubTitle = styled.Text(props => ({
  color: props.color ? props.color : colors.subBlack,
  fontWeight: 600,
  fontSize: 9,
  marginLeft: props.marginLeft ? props.marginLeft : 0,
  alignSelf: props.alignSelf ? props.alignSelf : 'center',
}));

export const CardRow = styled.TouchableOpacity(props => ({
  alignSelf: props.alignSelf ? props.alignSelf : 'center',
  marginVertical: props.marginVertical ? props.marginVertical : 0,
  alignItems: props.alignItems ? props.alignItems : 'center',
  justifyContent: props.justifyContent ? props.justifyContent : 'flex-start',
  flex: 1,
  flexDirection: 'row',
  borderRightWidth: props.separator ? StyleSheet.hairlineWidth : 1,
  borderRightColor: props.separator ? colors.shadow : 'transparent',
  marginRight: props.separator ? 10 : 0,
  // borderWidth: 1,
  // borderColor: 'blue',
}));

export const CardColumn = styled.TouchableOpacity(props => ({
  marginLeft: props.marginLeft ? props.marginLeft : 0,
  paddingRight: props.separator ? 17 : 0,
  alignItems: props.alignItems ? props.alignItems : 'flex-start',
  borderRightWidth: props.separator ? StyleSheet.hairlineWidth : 0,
  borderRightColor: props.separator ? colors.shadow : 0,
  justifyContent: 'center',
  // borderWidth: 1,
  // borderColor: 'red',
}));

export const CardNotification = styled.View(props => ({
  backgroundColor: props.color ? props.color : '#DF1717',
  alignSelf: props.alignSelf ? props.alignSelf : 'center',
  position: 'absolute',
  right: 10,
  top: 10,
  width: 5,
  height: 5,
  borderRadius: 2.5,
}));
