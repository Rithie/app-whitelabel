import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {colors} from '~/styles';

const screenWidth = Math.round(Dimensions.get('window').width);

const S = StyleSheet.create({
  container: {flexDirection: 'row', height: 52, elevation: 2},
  tabButton: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  tabButton2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: StyleSheet.hairlineWidth,
    // borderColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 30,
    padding: 10,
    position: 'absolute',
    top: -27,
    left: screenWidth / 2 - 25,
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
  },
});

const TabBar = props => {
  const {
    renderIcon,
    getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation,
  } = props;

  const {routes, index: activeRouteIndex} = navigation.state;
  console.log('Props', props);
  return (
    <View style={S.container}>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
        return routeIndex === 1 ? (
          <TouchableOpacity
            key={routeIndex}
            style={S.tabButton2}
            onPress={() => {
              //onTabPress({route}); // controla rotas
            }}
            onLongPress={() => {
              //onTabLongPress({route}); // controla rotas
            }}
            accessibilityLabel={getAccessibilityLabel({route})}>
            {renderIcon({route, focused: isRouteActive, tintColor})}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            key={routeIndex}
            style={S.tabButton}
            onPress={() => {
              onTabPress({route});
            }}
            onLongPress={() => {
              onTabLongPress({route});
            }}
            accessibilityLabel={getAccessibilityLabel({route})}>
            {renderIcon({route, focused: isRouteActive, tintColor})}

            {/* <Text>{getLabelText({route})}</Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
