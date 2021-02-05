import React from 'react';
import MapView from 'react-native-maps';
import FocusAwareStatusBar from '../components/focus-aware-status-bar';

const MapScreen = () => {
  return (
    <>
      <FocusAwareStatusBar barStyle="dark-content" />
      <MapView
        style={styles.container}
        showsUserLocation
        showsScale
        showsCompass

      />
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
    backgroundColor: 'hotpink',
    padding: 30,
    margin: 10,
    borderRadius: 10
  }
};

export default MapScreen;
