import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import FocusAwareStatusBar from '../components/focus-aware-status-bar';

const ChuckNorrisScreen = () => {
  const [joke, setJoke] = useState('Press the button to get a Chuck Norris joke');
  return (
    <>
      <FocusAwareStatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View
          style={styles.content}
        >
          <Text
            style={styles.jokeText}
          >
            {joke}
          </Text>
        </View>
        <Button
          title="Get a joke!"
          onPress={async ()=> {
            setJoke('Here it comes...');
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const json = await response.json();
            const newJoke = json.value;
            setJoke(newJoke);
          }}
        />
      </View>
    </>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  content: {
    marginHorizontal: 60
  },
  jokeText: {
    fontSize: 20
  }
};

export default ChuckNorrisScreen;
