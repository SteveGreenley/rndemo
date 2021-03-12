import React from 'react';
import { TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';

const { width } = Dimensions.get('window');

const items = [
  'Mary',
  'Patricia',
  'Jennifer',
  'Linda',
  'Elizabeth',
  'Barbara',
  'Susan',
  'Jessica',
  'Sarah'
];

const ListScreen = (props) => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        {items.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.listItem}
            onPress={()=>{
              navigate('Detail', { item });
            }}
          >
            <Text style={styles.itemText}>{item}</Text>
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
