import React from 'react';
import { View, Text, Button, Image, ScrollView, Dimensions } from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

const { width: windowWidth } = Dimensions.get('window');

const SharedElementSecondScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'hotpink'
      }}>
        <SharedElement id="image">
          <Image
            source={require('../../assets/viaduct-harbour-sunset-auckland-new-zealand-AUCKLAND1118.jpg')}
            style={{
              width: windowWidth,
              height: 400,
              resizeMode: 'cover'
            }}
          />
        </SharedElement>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'cyan'
          }}
        >
          <Text>TOP</Text>
          <Text>MIDDLE</Text>
          <Text>BOTTOM</Text>
        </View>
      </View>
    </View>
  );
};

SharedElementSecondScreen.sharedElements = (navigation, otherNavigation, showing) => {
  return ["image"];
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'green'
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};

export default SharedElementSecondScreen;
