import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { useDimensions } from '@react-native-community/hooks';

const DetailScreen = (props) => {
  const { getParam } = useNavigation();
  const imageUrl = getParam('imageUrl');
  const { width } = useDimensions().window;

  console.log('!!! imageUrl',imageUrl);
  return (
    <View style={styles.container}>
      <Image
        style={{ width, height: null, flex: 1 }}
        source={{ uri: imageUrl }}
        resizeMode="contain"
      />
    </View>
  );
};

DetailScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('name')
});

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  textContainer: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    margin: 20,
    padding: 10,
    borderRadius: 16,
    alignItems: 'center'
  },
  itemText: {
    fontSize: 40,
  }
};

export default DetailScreen;
