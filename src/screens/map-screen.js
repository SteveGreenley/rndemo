import React, { useState } from 'react';
import MapView from 'react-native-maps';
import FocusAwareStatusBar from '../components/focus-aware-status-bar';
import { SafeAreaView, Alert } from 'react-native';
import { Button, SearchBar } from 'react-native-elements';

const mapStyle = require('../../assets/custom-map-style.json');

const MapScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <FocusAwareStatusBar barStyle="dark-content" />
      <MapView
        provider="google"
        style={styles.container}
        showsUserLocation
        showsMyLocationButton
        customMapStyle={mapStyle}
      />

      <SafeAreaView
        style={[styles.overlay,styles.content]}
        pointerEvents="box-none"
      >
        <SearchBar
          placeholder="Search"
          returnKeyType="search"
          value={searchValue}
          lightTheme
          inputContainerStyle={styles.inputContainer}
          containerStyle={styles.searchBarContainer}
          onChangeText={(text)=>{
            setSearchValue(text);
          }}
          onSubmitEditing={()=>{
            Alert.alert('Search value submitted');
          }}
        />
        <Button
          title="Press me"
          onPress={()=>{
            Alert.alert('Pressed!');
          }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = {
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent:'space-between',
    alignItems: 'center',
    margin: 20
  },
  overlay: {
    position: 'absolute',
    left: 0, right: 0,
    top: 0, bottom: 0,
  },
  searchBarContainer: {
    width: '100%',
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  inputContainer: {
    borderRadius: 30,
    backgroundColor:'rgba(255,255,255,0.8)'
  }
};

export default MapScreen;
