import React from 'react';
import {Image} from 'react-native';
import Card from '../Card';
import {CardRow, CardColumn, CardTitle, CardSubTitle} from '~/styles/general';
import {colors} from '~/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PortalProfessor = () => (
  <Card direction="row" notify>
    <CardRow onPress={() => {}}>
      <Image
        style={{
          width: 25,
          height: 25,
          borderRadius: 16.5,
          alignSelf: 'center',
        }}
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
        }}
      />
      <CardColumn marginLeft={10}>
        <CardTitle>Portal do professor</CardTitle>
        <CardSubTitle>
          Acesse o portal do professor para lançamentos de notas
        </CardSubTitle>
      </CardColumn>
    </CardRow>
    <FontAwesome5 name="chevron-right" size={15} color={colors.subBlack} />
  </Card>
);

export default PortalProfessor;
