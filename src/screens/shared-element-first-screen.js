import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

const SharedElementFirstScreen = (props) => {
  return (
    <View style={styles.container}>
      <SharedElement id="image">
        <Image
          source={require('../../assets/viaduct-harbour-sunset-auckland-new-zealand-AUCKLAND1118.jpg')}
          resizeMode="contain"
          style={{
            width: 300,
            height: 200
          }}
        />
      </SharedElement>
      <Text>SharedElementFirstScreen</Text>
      <Button
        title="Next Screen"
        onPress={() => {
          props.navigation.navigate('Shared 2');
        }}
      />
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
