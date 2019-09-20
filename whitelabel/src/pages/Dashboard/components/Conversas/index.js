import React from 'react';
import {View} from 'react-native';
import Card from '../Card';
import {CardRow, CardColumn, CardTitle, CardSubTitle} from '~/styles/general';
import {colors} from '~/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Conversas = () => (
  <Card direction="row" notify>
    <CardRow separator onPress={() => {}}>
      <FontAwesome5 name="comments" size={32} color={colors.primary} />
      <CardColumn marginLeft={10}>
        <CardTitle>Conversas</CardTitle>
        <CardSubTitle>Interaja com as famílias</CardSubTitle>
      </CardColumn>
    </CardRow>
    <CardRow>
      <CardRow>
        <CardTitle>13</CardTitle>
        <CardSubTitle marginLeft={5}>Conversas não lidas</CardSubTitle>
      </CardRow>
      <FontAwesome5 name="chevron-right" size={15} color={colors.subBlack} />
    </CardRow>
  </Card>
);

export default Conversas;
