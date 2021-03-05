import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import TouchableScale from 'react-native-touchable-scale';

const SharedElementFirstScreen = (props) => {
  return (
    <View style={styles.container}>
      <TouchableScale
        // activeScale={0.95}
        onPress={() => {
          props.navigation.navigate('Shared 2');
        }}
      >
        <SharedElement id="image">
          <Image
            source={require('../../assets/viaduct-harbour-sunset-auckland-new-zealand-AUCKLAND1118.jpg')}
            resizeMode="contain"
            style={{
              width: 300,
              height: 200,
              borderRadius: 15
            }}
          />
        </SharedElement>
      </TouchableScale>
      <Text>Tap the image!</Text>
    </View>
  );
};
SharedElementFirstScreen.sharedElements = (navigation, otherNavigation, showing) => {
  return ['image'];
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};

export default SharedElementFirstScreen;
