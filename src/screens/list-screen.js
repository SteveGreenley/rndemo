import React from 'react';
import { TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';

const { width } = Dimensions.get('window');

const items = [
  { name: 'Star Wars', imageUrl: 'https://d2j1wkp1bavyfs.cloudfront.net/wp-content/uploads/2018/07/01054422/7169497.jpg?q=50' },
  { name: 'Rogue One', imageUrl: 'https://d2j1wkp1bavyfs.cloudfront.net/wp-content/uploads/2018/07/01054420/7169493.jpg?q=50' },
  { name: 'The Phantom Menace', imageUrl: 'https://d2j1wkp1bavyfs.cloudfront.net/wp-content/uploads/2018/07/01054417/7169488.jpg?q=50' },
  { name: 'Attack of the Clones', imageUrl: 'https://d2j1wkp1bavyfs.cloudfront.net/wp-content/uploads/2018/07/01054412/7169477.jpg?q=50' },
  { name: 'The Force Awakens', imageUrl: 'https://d2j1wkp1bavyfs.cloudfront.net/wp-content/uploads/2018/07/01054415/7169481.jpg?q=50' },
  { name: 'The Last Jedi', imageUrl: 'https://d2j1wkp1bavyfs.cloudfront.net/wp-content/uploads/2018/07/01054442/7172927.jpg?q=50' },
  { name: 'Revenge of the Jedi', imageUrl: 'https://d2j1wkp1bavyfs.cloudfront.net/wp-content/uploads/2018/07/01054418/7169490.jpg?q=50' },
  { name: 'The Empire Strikes Back', imageUrl: 'https://d2j1wkp1bavyfs.cloudfront.net/wp-content/uploads/2018/07/01054414/7169480.jpg?q=50' },
  { name: 'A New Hope', imageUrl: 'https://d2j1wkp1bavyfs.cloudfront.net/wp-content/uploads/2018/07/01054422/7169498.jpg?q=50' },
];

const ListScreen = (props) => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        {items.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={styles.listItem}
            onPress={()=>{
              navigate('Detail', { name: item.name, imageUrl: item.imageUrl });
            }}
          >
            <Text style={styles.itemText}>{item.name}</Text>
            <Icon
              name="chevron-right"
              type="material-community"
              color="grey"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  listItem: {
    // backgroundColor:'green',
    height: 50,
    paddingLeft:20,
    width,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    borderWidth:1,
    borderColor: 'lightgrey'
  },
  itemText: {
    fontSize: 20
  }
};

export default ListScreen;
