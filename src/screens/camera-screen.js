import React, { useEffect, useState, useRef } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import FocusAwareStatusBar from '../components/focus-aware-status-bar';
import { RNCamera } from 'react-native-camera';
import Permissions from 'react-native-permissions';
import CameraRoll from '@react-native-community/cameraroll';

const CameraScreen = () => {
  const [cameraPermission, setCameraPermission] = useState(false);
  const cameraRef = useRef();
  useEffect(()=>{
    Permissions.request('camera', { type: 'always' }).then(response => {
      setCameraPermission(true);
    });
  });
  return (
    <>
      <FocusAwareStatusBar barStyle="light-content" />
      <View
        style={styles.container}
      >
        {cameraPermission ? (
          <RNCamera
            ref={cameraRef}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.auto}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            captureAudio={false}
          />

        ) : (
          <Text>NO PERMISSION</Text>
        )}
        <View
          style={styles.overlay}
        >
          <Button
            title="Take a photo"
            icon={{ name: 'camera', color: 'white' }}
            onPress={async ()=>{
              const data = await cameraRef.current.takePictureAsync();
              console.log('picture taken', data.uri);
              CameraRoll.save(data.uri, 'photo');
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = {
  container: {
    flex: 1,
    // justifyContent: 'space-around',
    // alignItems: 'center',
    backgroundColor: 'blue'
  },
  content: {
    backgroundColor: 'hotpink',
    padding: 30,
    margin: 10,
    borderRadius: 10
  },
  preview: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    left: 0, right: 0,
    top: 0, bottom: 0,
    justifyContent: 'flex-end',
    padding: 20
  }
};

export default CameraScreen;
