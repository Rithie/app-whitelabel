import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import styles from './styles';

export default MenuItem = props => (
  <TouchableOpacity style={styles.container}>
    {props.fixedValue && (
      <>
        <Text style={[styles.paragraph]}>
          {props.value}
          {props.indicador}
        </Text>
        <View />
        <Text style={styles.label}>{props.label}</Text>
      </>
    )}
  </TouchableOpacity>
);
