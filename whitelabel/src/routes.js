import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {Icon, TabBar} from '~/components';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Menu from '~/pages/Menu';
import Dashboard from '~/pages/Dashboard';
import AnimatedHeder from '~/pages/AnimatedHeader';
import CardPanGesture from '~/pages/CardPanGesture';

import {colors} from '~/styles';

const Screen2 = () => <View />;

const TabNavigator = createBottomTabNavigator(
  {
    CardPanGesture: {
      screen: CardPanGesture,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="home" color={tintColor} />,
      },
    },
    Screen1: {
      screen: Screen2,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Ionicons name="md-add" size={32} color="#fff" />
        ),
      },
    },
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="user" color={tintColor} />,
      },
    },
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: '#ddd',
    },
  },
);

const Routes = createAppContainer(TabNavigator);

export default Routes;
