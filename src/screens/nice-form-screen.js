import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { ListItem, Input } from 'react-native-elements';
import Animated from 'react-native-reanimated';
import FocusAwareStatusBar from '../components/focus-aware-status-bar';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const NiceFormScreen = ({ navigation }) => {
  const [scrollY] = useState(new Animated.Value(0));
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolateRight: 'clamp'
  });
  return (
    <>
      <FocusAwareStatusBar barStyle="light-content" />
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        style={{
          ...styles.overlay,
        }}
        contentContainerStyle={{
          marginTop: HEADER_MAX_HEIGHT
        }}
      >
        <ListItem bottomDivider>
          <ListItem.Input
            style={{ textAlign:'left' }}
            label="Name"
            placeholder="Your full name"
            leftIcon={{ name: 'person' }}
          />
        </ListItem>

        <ListItem bottomDivider>
          <ListItem.Input
            style={{ textAlign:'left' }}
            label="Email"
            placeholder="Email address"
            leftIcon={{ name: 'email', type: 'material-community' }}
          />
        </ListItem>

      </Animated.ScrollView>
      <View
        style={styles.overlay}
        pointerEvents="box-none"
      >
        <Animated.View
          style={{
            width:'100%',
            height:headerHeight,
            alignItems:'center',
            justifyContent:'center'
          }}
        >
          <Image
            source={require('../../assets/new-zealand-landscape-auckland-cityscape-sunset-night-reflections.jpg')}
            style={{
              flex: 1,
              width: '100%',
              height: 100
            }}
          />
        </Animated.View>
      </View>
      <View
        style={styles.overlay}
        pointerEvents="box-none"
      >
        <Animated.View
          style={{
            width:'100%',
            height:headerHeight,
            backgroundColor:'transparent',
            paddingTop:30,
            alignItems:'center',
            justifyContent:'center'
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white'
            }}
          >
            Nice Form
          </Text>
        </Animated.View>
      </View>

    </>
  );
};

const styles = {
  container: {
    flex: 1
  },
  overlay: {
    left:0, right: 0,
    top: 0, bottom: 0,
    position: 'absolute'
  },
  button: {
    marginHorizontal: 40
  }
};

export default NiceFormScreen;
