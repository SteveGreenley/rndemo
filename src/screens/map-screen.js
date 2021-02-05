import React from 'react';
import MapView from 'react-native-maps';
import FocusAwareStatusBar from '../components/focus-aware-status-bar';

const mapStyle = require('../../assets/custom-map-style.json');

const MapScreen = () => {
  return (
    <>
      <FocusAwareStatusBar barStyle="dark-content" />
      <MapView
        provider="google"
        style={styles.container}
        showsUserLocation
        showsScale
        showsCompass
        showsMyLocationButton
        customMapStyle={mapStyle}
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
