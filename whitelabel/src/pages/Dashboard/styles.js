import styled from 'styled-components/native';

import {StyleSheet} from 'react-native';

export const Layer = styled.View(props => ({
  flex: 1,
  background: '#f8f8f8',
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  shadowColor: '#666',
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.37,
  shadowRadius: 7.49,
  elevation: 12,
  position: 'absolute',
  top: 89,
  height: '100%',
}));

export const ScrollArea = styled.View`
  flex: 1;
  background: transparent;
  border: 1px solid #f90;
  ...StyleSheet.absoluteFillObject;
`;

export const LogoButton = styled.TouchableOpacity`
  width: 33px;
  height: 33px;
  background: #fff;
  border-radius: 17px;
  box-shadow: 2px 2px 15px rgba(194, 194, 194, 0.3);
  align-items: center;
  justify-content: center;
`;

export const TextHeader = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 22px;
`;

export const BasicTitle = styled.Text`
  color: #4b4b4b;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
`;

export const Row = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px 16px 0px 16px;
`;

export const Header = styled.View`
  align-items: flex-start;
  justify-content: center;
  margin: 0px 16px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  margin: 0px 0px 5px 0px;
`;

export const HeaderIcons = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
