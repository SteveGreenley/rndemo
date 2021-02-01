import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import ScreenOne from './screens/screen-one';
import ScreenTwo from './screens/screen-two';
import ScreenThree from './screens/screen-three';
import ScreenFour from './screens/screen-four';


const TabNavigator = createBottomTabNavigator({
  'Simple Animation': {
    screen: ScreenOne,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="movie-open" color={tintColor} type="material-community"/>
      )
    }
  },
  'Chuck Norris': {
    screen: ScreenTwo,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="api" color={tintColor} type="material-community"/>
      )
    }
  },
  'Tic Tac Toe': {
    screen: ScreenThree,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="nintendo-game-boy" color={tintColor} type="material-community"/>
      )
    }
  },
  'Form': {
    screen: ScreenFour,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="form" color={tintColor} type="ant-design"/>
      )
    }
  },
});

export default createAppContainer(TabNavigator);
