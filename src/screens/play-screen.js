import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const PlayScreen = (props) => {
  const [pressed, press] = useState();
  return (
    <View style={styles.container}>
      <Text>PlayScreen</Text>
      <Text>{pressed ? 'PRESSED' : 'NOT PRESSED'}</Text>
      <Button
        title="Press me"
        onPress={() => {
          press(!pressed);
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

export default PlayScreen;
