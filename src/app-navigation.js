import React from 'react';
// import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import ScreenOne from './screens/screen-one';
import ScreenTwo from './screens/screen-two';

const TabNavigator = createBottomTabNavigator({
  One: {
    screen: ScreenOne,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="movie-open" color={tintColor} type="material-community"/>
      )
    }
  },
  Two: {
    screen: ScreenTwo,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="api" color={tintColor} type="material-community"/>
      )
    }
  },
});

export default createAppContainer(TabNavigator);
