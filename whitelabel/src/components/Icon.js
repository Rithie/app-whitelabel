import React from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const iconMap = {
  home: '♡',
  search: '♢',
  favorites: '♧',
  profile: '♤',
};

const Icon = ({name, color, style, ...props}) => {
  const icon = iconMap[name];

  return (
    <View>
      {/* <Text style={[{fontSize: 26, color}, style]}>{icon}</Text> */}
      <View
        style={{
          position: 'absolute',
          right: 5,
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: 'red',
          zIndex: 10,
        }}></View>
      <AntDesign name={name} size={32} color={color} />
    </View>
  );
};

export default Icon;
