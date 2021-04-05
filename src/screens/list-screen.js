import React from 'react';
import { TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';

const { width } = Dimensions.get('window');

const items = [
  { name: 'Mary', imageUrl: 'https://static.wikia.nocookie.net/disney/images/5/5c/Mary_Poppins_-_Julie_Andrews.jpg/revision/latest?cb=20160212083150' },
  { name: 'Patricia', imageUrl: 'https://www.celebrityspeakersbureau.com/wp-content/uploads/2015/03/Patricia-Arquette.jpg' },
  { name: 'Jennifer', imageUrl: 'https://www.celebrityspeakersbureau.com/wp-content/uploads/2013/06/jennifer-aniston.jpg' },
  { name: 'Linda', imageUrl: 'https://www.thewrap.com/wp-content/uploads/2018/08/linda.jpg' },
  { name: 'Elizabeth', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Queen_Elizabeth_II_of_New_Zealand_%28cropped%29.jpg' },
  { name: 'Barbara', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Barbara_Windsor_Maryebone_Tree.JPG' },
  { name: 'Susan', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Susan_Sarandon%2C_Festival_de_Sitges_2017_%28cropped%29.jpg' },
  { name: 'Jessica', imageUrl: 'https://www.indiewire.com/wp-content/uploads/2021/03/AP21084701999083.jpg?w=780' },
  { name: 'Sarah', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Sarah_Silverman_DNC_July_2016.jpg/220px-Sarah_Silverman_DNC_July_2016.jpg' },
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
