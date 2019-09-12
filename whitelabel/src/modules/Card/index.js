import React from 'react';
import { Text, View } from 'react-native';
import { Container } from './styles'
// import styles from '../theme/solarized-dark/module';
const styles = require('../../theme')('Module');

const CardComponent = () => (
    <View style={styles.container}>
      <Text style={styles.text}>
        Module <Text style={styles.accent}>Card</Text>
      </Text>
      <Container></Container>
    </View>
);

export default {
    name: 'Card',
    Component: CardComponent,
};
