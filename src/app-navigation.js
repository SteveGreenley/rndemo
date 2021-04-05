import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { TabBarTop } from 'react-navigation-material-bottom-tabs';
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
import BarCharScreen from './screens/bar-chart-screen';
import BarChartScreen from './screens/bar-chart-screen';
import { TouchableWithoutFeedback } from 'react-native';

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
    cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
    cardStyle: {
      backgroundColor: 'transparent'
    }
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

const tabBarIcon = ({ name, type = 'material-community' }) => ({ tintColor, focused, horizontal }) => (
  <Icon name={name} type={type} color={tintColor}/>
);

const TabNavigator = createMaterialTopTabNavigator({
  'Shared': {
    screen: SharedElementStackNavigator,
    navigationOptions: {
      tabBarIcon: tabBarIcon({ name: 'content-copy', type: 'material' }),
    }
  },
  'Animation': {
    screen: SimpleAnimationScreen,
    navigationOptions: {
      tabBarIcon: tabBarIcon({ name: 'movie-open' })
    }
  },
  'Norris': {
    screen: ChuckNorrisScreen,
    navigationOptions: {
      tabBarIcon: tabBarIcon({ name: 'api' })
    }
  },
  'OXO': {
    screen: TicTacToeScreen,
    navigationOptions: {
      tabBarIcon: tabBarIcon({ name: 'nintendo-game-boy' })
    }
  },
  'Form': {
    screen: NiceFormScreen,
    navigationOptions: {
      tabBarIcon: tabBarIcon({ name: 'form', type: 'ant-design' })
    }
  },
  'Map': {
    screen: MapScreen,
    navigationOptions: {
      tabBarIcon: tabBarIcon({ name: 'world-o', type: 'fontisto' })
    }
  },
  'Camera': {
    screen: CameraScreen,
    navigationOptions: {
      tabBarIcon: tabBarIcon({ name: 'camera' })
    }
  },
  'Play': {
    screen: PlayScreen,
    navigationOptions: {
      tabBarIcon: tabBarIcon({ name: 'sony-playstation' })
    }
  },
  'Nav': {
    screen: StackNav,
    navigationOptions: {
      tabBarIcon: tabBarIcon({ name: 'format-list-bulleted' })
    }
  },
  'BarChart': {
    screen: BarChartScreen,
    navigationOptions: {
      tabBarIcon: tabBarIcon({ name: 'bar-chart', type: 'material' })
    }
  }
},{
  initialRouteName: 'Shared',
  tabBarComponent: TabBarTop,
  tabBarPosition: 'bottom',
  defaultNavigationOptions: {
    tabBarButtonComponent: TouchableWithoutFeedback
  },
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'grey',
    pressColor: 'white',
    showIcon: true,
    swipeEnabled:false,
    animationEnabled: true,
    scrollEnabled:true,
    upperCaseLabel: false,
    labelStyle: {
      fontSize: 11
    },
    renderIndicator: props => {},
    style:{
      backgroundColor: 'white',
      borderColor: 'grey',
      borderTopWidth: 1,
    },
    tabStyle:{
      paddingHorizontal: 0,
      width: 90,
      height: 90,
      backgroundColor: 'white',
    },
  }
});

export default createAppContainer(TabNavigator);
