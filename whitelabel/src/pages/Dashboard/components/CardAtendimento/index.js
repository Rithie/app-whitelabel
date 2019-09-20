import React from 'react';

import Card from '../Card';
import {CardRow, CardColumn, CardTitle, CardSubTitle} from '~/styles/general';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '~/styles';

const CardAtendimento = () => (
  <Card notify>
    <CardRow alignSelf="flex-start">
      <FontAwesome5 name="headset" size={32} color={colors.primary} />
      <CardColumn marginLeft={10}>
        <CardTitle>Atendimento</CardTitle>
        <CardSubTitle>Alguns atendimentos requerem sua ação</CardSubTitle>
      </CardColumn>
    </CardRow>
    <CardRow justifyContent="space-between" alignItems="center">
      <CardRow
        separator
        marginVertical={5}
        justifyContent="flex-start"
        alignItems="center">
        <CardTitle>13</CardTitle>
        <CardSubTitle marginLeft={5}>Conversas não lidas</CardSubTitle>
        <FontAwesome5
          style={{marginLeft: 5, marginTop: 2}}
          name="chevron-right"
          size={8}
          color={colors.subBlack}
        />
      </CardRow>
      <CardRow justifyContent="flex-start" alignItems="center">
        <CardTitle>04</CardTitle>
        <CardSubTitle marginLeft={5}>Conversas não lidas</CardSubTitle>
        <FontAwesome5
          style={{marginLeft: 5, marginTop: 2}}
          name="chevron-right"
          size={8}
          color={colors.subBlack}
        />
      </CardRow>
    </CardRow>
  </Card>
);

export default CardAtendimento;
