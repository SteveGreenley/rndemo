import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { useDimensions } from '@react-native-community/hooks';

const DetailScreen = (props) => {
  const { getParam } = useNavigation();
  const name = getParam('name');
  const imageUrl = getParam('imageUrl');
  const { width, height } = useDimensions().window;

  console.log('!!! imageUrl',imageUrl);
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Image
          style={{ width, height  }}
          source={{ uri: imageUrl }}
          resizeMode="cover"
        />
      </View>
      <View style={{ ...StyleSheet.absoluteFill, justifyContent: 'flex-end' }}>
        <View style={styles.textContainer}>
          <Text style={styles.itemText}>{name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
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
