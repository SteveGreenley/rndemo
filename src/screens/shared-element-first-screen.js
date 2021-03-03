import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

const SharedElementFirstScreen = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
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
      </TouchableOpacity>
      <Text>Tap the image!</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};

export default SharedElementFirstScreen;
