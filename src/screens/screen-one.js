import React, { useState } from 'react';
import { Text, View, LayoutAnimation } from 'react-native';
import { Button } from 'react-native-elements';

const ScreenOne = () => {
  const [buttonPressed, setButtonPress] = useState(false);
  return (
    <View
      style={{
        ...styles.container,
        flexDirection: buttonPressed ? 'column' : 'column-reverse'
      }}
    >
      <View
        style={styles.content}
      >
        <Text>Hello this is the first screen</Text>
      </View>
      <Button
        title="Press me!"
        onPress={()=>{
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
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
  content: {
    backgroundColor: 'hotpink',
    padding: 30,
    margin: 10,
    borderRadius: 10
  }
};

export default ScreenOne;
