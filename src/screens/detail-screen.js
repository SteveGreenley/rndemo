import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

const DetailScreen = (props) => {
  const { getParam } = useNavigation();
  const item = getParam('item');
  return (
    <View style={styles.container}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 40
  }
};

export default DetailScreen;
