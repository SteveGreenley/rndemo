import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const PlayScreen = (props) => {
  const [pressed, setPressed] = useState(false);
  return (
    <View style={{ ...styles.container, backgroundColor: pressed ? 'hotpink' : 'yellow' }}>
      <Text>PlayScreen</Text>
      <Text>{`Pressed: ${pressed}`}</Text>
      <Button
        title="Press me!"
        onPress={()=>{
          setPressed(!pressed);
        }}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor:'yellow',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};

export default PlayScreen;
