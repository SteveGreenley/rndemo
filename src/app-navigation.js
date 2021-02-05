import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import SimpleAnimationScreen from './screens/simple-animation-screen';
import ChuckNorrisScreen from './screens/chuck-norris-screen';
import TicTacToeScreen from './screens/tic-tac-toe-screen';
import NiceFormScreen from './screens/nice-form-screen';
import MapScreen from './screens/map-screen';


const TabNavigator = createBottomTabNavigator({
  'Animation': {
    screen: SimpleAnimationScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="movie-open" color={tintColor} type="material-community"/>
      )
    }
  },
  'Chuck Norris': {
    screen: ChuckNorrisScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="api" color={tintColor} type="material-community"/>
      )
    }
  },
  'Tic Tac Toe': {
    screen: TicTacToeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="nintendo-game-boy" color={tintColor} type="material-community"/>
      )
    }
  },
  'Form': {
    screen: NiceFormScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="form" color={tintColor} type="ant-design"/>
      )
    }
  },
  'Map': {
    screen: MapScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="world-o" color={tintColor} type="fontisto"/>
      )
    }
  },
});

export default createAppContainer(TabNavigator);
