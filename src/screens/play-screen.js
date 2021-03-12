import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const NewComponentName = (props) => {
  const [pressed, setPressed] = useState(false);
  return (
    <View style={styles.container}>
      <Text>NewComponentName</Text>
      <Text>{pressed ? 'PRESS' : 'NOT PRESSED'}</Text>
      <Button
        title="PRESS ME"
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
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};

export default NewComponentName;
