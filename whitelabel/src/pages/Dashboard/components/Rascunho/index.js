import React from 'react';
import {View, Image} from 'react-native';
import Card from '../Card';
import {CardRow, CardColumn, CardTitle, CardSubTitle} from '~/styles/general';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '~/styles';

const CardEventos = () => (
  <Card notify>
    <CardRow alignSelf="flex-start">
      <Image
        style={{
          width: 24,
          height: 24,
          alignSelf: 'center',
          tintColor: colors.primary,
        }}
        source={require('../../../../../assets/img/Eventos/iOS/Icon_30px_evento.png')}
      />
      <CardColumn marginLeft={10}>
        <CardTitle>Rascunho</CardTitle>
        <CardSubTitle>Finalize o conteúdo que foi iniciado</CardSubTitle>
      </CardColumn>
    </CardRow>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderWidth: 1,
        // borderColor: '#f90',
        width: '100%',
        marginTop: 20,
      }}>
      <CardColumn separator alignItems="center" justifyContent="center">
        <FontAwesome5 name="envelope" size={18} color={colors.black} />
        <CardSubTitle marginLeft={5}>Mensagem</CardSubTitle>
      </CardColumn>
      <CardColumn separator alignItems="center" justifyContent="center">
        <FontAwesome5 name="envelope" size={18} color={colors.black} />
        <CardSubTitle marginLeft={5}>Mensagem</CardSubTitle>
      </CardColumn>
      <CardColumn separator alignItems="center" justifyContent="center">
        <FontAwesome5 name="envelope" size={18} color={colors.black} />
        <CardSubTitle marginLeft={5}>Mensagem</CardSubTitle>
      </CardColumn>
      <CardColumn marginRight={5} alignItems="center" justifyContent="center">
        <FontAwesome5 name="envelope" size={18} color={colors.black} />
        <CardSubTitle marginLeft={5}>Mensagem</CardSubTitle>
      </CardColumn>
    </View>
  </Card>
);

export default CardEventos;
