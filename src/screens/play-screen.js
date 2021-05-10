import React from 'react';
import { View, Text } from 'react-native';

const NewComponentName = (props) => {
  return (
    <View style={styles.container}>
      <Text>NewComponentName</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default NewComponentName;
