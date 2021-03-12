import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { CardStyleInterpolators } from 'react-navigation-stack';
import SimpleAnimationScreen from './screens/simple-animation-screen';
import ChuckNorrisScreen from './screens/chuck-norris-screen';
import TicTacToeScreen from './screens/tic-tac-toe-screen';
import NiceFormScreen from './screens/nice-form-screen';
import MapScreen from './screens/map-screen';
import CameraScreen from './screens/camera-screen';
import SharedElementFirstScreen from './screens/shared-element-first-screen';
import SharedElementSecondScreen from './screens/shared-element-second-screen';
import PlayScreen from './screens/play-screen';
import ListScreen from './screens/list-screen';
import DetailScreen from './screens/detail-screen';

const SharedElementStackNavigator = createSharedElementStackNavigator({
  'Shared 1': {
    screen: SharedElementFirstScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  'Shared 2': {
    screen: SharedElementSecondScreen,
    navigationOptions: {
      headerShown: false
    }
  }
},{
  defaultNavigationOptions: {
    cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
  }
});

const StackNav = createStackNavigator({
  'List': {
    screen: ListScreen
  },
  'Detail': {
    screen: DetailScreen
  }
});

const TabNavigator = createBottomTabNavigator({
  'Shared': {
    screen: SharedElementStackNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="content-copy" type="material" color={tintColor} />
      )
    }
  },
  'Animation': {
    screen: SimpleAnimationScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="movie-open" color={tintColor} type="material-community"/>
      )
    }
  },
  'Norris': {
    screen: ChuckNorrisScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="api" color={tintColor} type="material-community"/>
      )
    }
  },
  'OXO': {
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
  'Camera': {
    screen: CameraScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="camera" color={tintColor} type="material-community"/>
      )
    }
  },
  'Play': {
    screen: PlayScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="sony-playstation" color={tintColor} type="material-community"/>
      )
    }
  },
  'Nav': {
    screen: StackNav,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="format-list-bulleted" color={tintColor} type="material-community"/>
      )
    }
  }
});

export default createAppContainer(TabNavigator);
