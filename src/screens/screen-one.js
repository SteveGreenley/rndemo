import React, { useState } from 'react';
import { Text, View, LayoutAnimation } from 'react-native';
import { Button } from 'react-native-elements';

const ScreenOne = () => {
  const [buttonPressed, setButtonPress] = useState(false);
  return (
    <View
      style={{
        ...styles.container,
        justifyContent: buttonPressed ? 'center' : 'space-around'
      }}
    >
      <View>
        <Text>Hello this is the first screen</Text>
      </View>
      <Button
        title="Press me!"
        onPress={()=>{
          LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
          setButtonPress(!buttonPressed);
        }}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
};

export default ScreenOne;
