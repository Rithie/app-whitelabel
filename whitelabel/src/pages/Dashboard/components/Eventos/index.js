import React from 'react';
import {View} from 'react-native';
import Card from '../Card';
import {CardRow, CardColumn, CardTitle, CardSubTitle} from '~/styles/general';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '~/styles';

const DraftCard = () => (
  <Card notify>
    <CardRow alignSelf="flex-start">
      <FontAwesome5 name="calendar-day" size={32} color={colors.primary} />
      <CardColumn marginLeft={10}>
        <CardTitle>25 de Julho</CardTitle>
        <CardSubTitle>2 Eventos para hoje</CardSubTitle>
      </CardColumn>
    </CardRow>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
      }}>
      <CardColumn separator marginRight={5}>
        <CardSubTitle color={colors.black}>28/08</CardSubTitle>
        <CardSubTitle marginLeft={5}>1 Evento</CardSubTitle>
      </CardColumn>
      <CardColumn separator marginVertical={5}>
        <CardSubTitle color={colors.black}>28/08</CardSubTitle>
        <CardSubTitle marginLeft={5}>1 Evento</CardSubTitle>
      </CardColumn>
      <CardColumn marginVertical={5}>
        <CardSubTitle color={colors.black}>28/08</CardSubTitle>
        <CardSubTitle marginLeft={5}>1 Evento</CardSubTitle>
      </CardColumn>
    </View>
  </Card>
);

export default DraftCard;
