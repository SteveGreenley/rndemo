import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

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
      {items.map((item) => (
        <TouchableOpacity
          key={item}
          onPress={()=>{
            navigate('Detail', { item });
          }}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    // justfyContent: '',
    alignItems: 'flex-start',
    paddingLeft: 30
  },
  itemText: {
    paddingTop: 30,
    fontSize: 20
  }
};

export default ListScreen;
