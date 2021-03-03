import React, { useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import Animated, {
  Extrapolate,
  and,
  block,
  call,
  cond,
  eq,
  interpolate,
  set,
  useCode,
} from 'react-native-reanimated';
import { PanGestureHandler, State, ScrollView } from 'react-native-gesture-handler';
import {
  onGestureEvent,
  snapPoint,
  timing,
  useValues,
} from 'react-native-redash/lib/module/v1';
import { useMemoOne } from 'use-memo-one';
const { width, height } = Dimensions.get('window');
import { SharedElement } from 'react-navigation-shared-element';

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const SharedElementSecondScreen = (props) => {
  const [scrolling, setScrolling] = useState(true);
  const { goBack } = useNavigation();
  const [
    translationX,
    translationY,
    velocityY,
    translateX,
    translateY,
    snapBack,
    state,
    borderRadius
  ] = useValues(0, 0, 0, 0, 0, 0, State.UNDETERMINED,0);
  const snapTo = snapPoint(translationY, velocityY, [0, height / 2]);
  const scale = interpolate(translateY, {
    inputRange: [0, height * 0.05, height * 0.05],
    outputRange: [1, 0.75, 0.75],
    extrapolate: Extrapolate.CLAMP,
  });
  const gestureHandler = useMemoOne(
    () => onGestureEvent({ translationY, velocityY, state }),
    [state, translationY, velocityY]
  );
  useCode(
    () =>
      block([
        cond(
          eq(state, State.BEGAN),
          [set(borderRadius, 15)],
          []
        ),
        cond(
          eq(state, State.END),
          [set(borderRadius, 0)],
          []
        ),
        cond(
          and(eq(state, State.END), eq(snapTo, height / 2), eq(snapBack, 0)),
          set(snapBack, 1)
        ),
        cond(
          snapBack,
          call([], () => goBack()),
          cond(
            eq(state, State.END),
            [
              set(
                translateX,
                timing({ from: translationX, to: 0, duration: 250 })
              ),
              set(
                translateY,
                timing({ from: translationY, to: 0, duration: 250 })
              ),
            ],
            [
              set(translateX, translationX), set(translateY, translationY)
            ]
          ),
        ),
      ]),
    []
  );

  const panRef = React.createRef();
  return (
    <View style={styles.container}>
      <AnimatedScrollView
        waitFor={panRef}
        //scrollEnabled={scrolling}
        // onScroll={({ nativeEvent })=>{
        //   const { contentOffset: { y } } = nativeEvent;
        //   console.log('!!! y', y);
        //   if (y === 0) {
        //     setScrolling(false);
        //   }
        // }}
        style={{
          flex: 1,
          backgroundColor: 'white',
          transform: [{ translateX }, { translateY }, { scale }],
          borderRadius,
        }}
        contentContainerStyle={{
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <PanGestureHandler
          {...gestureHandler}
          ref={panRef}
          failOffsetY={[0,1000]}
          // enabled={!scrolling}
        >
          <Animated.View>
            <SharedElement id="image">
              <Image
                source={require('../../assets/viaduct-harbour-sunset-auckland-new-zealand-AUCKLAND1118.jpg')}
                style={{
                  width,
                  height: 400,
                  resizeMode: 'cover'
                }}
              />
            </SharedElement>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  padding: 10, margin: 10, backgroundColor: 'lightgrey'
                }}
              >
                Pull down to go back!
              </Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a massa vulputate, convallis augue eget, volutpat nisl. Fusce quam arcu, tincidunt et orci eget, efficitur finibus erat. Ut ut mollis lacus, vel semper magna. Proin a tempus dolor, vitae vestibulum tellus. Mauris sit amet elementum ex. Curabitur ultricies congue urna, quis dignissim risus auctor ultricies. Ut at magna non magna elementum mattis in at ex. Duis lorem arcu, aliquet quis dignissim eu, gravida quis tortor. Sed porttitor fermentum sem, elementum dapibus felis suscipit nec. Fusce nisi mi, aliquam gravida efficitur vel, vestibulum nec lorem.</Text>
              <Text>Proin eu semper lectus. Quisque egestas dignissim tellus, volutpat hendrerit turpis aliquam id. Etiam non efficitur ipsum. Pellentesque dignissim est at suscipit feugiat. Nullam ultricies suscipit tempor. Vestibulum vitae metus nec metus interdum bibendum id ac velit. Proin non ultricies quam. Morbi volutpat elit vel metus mattis, ut finibus mi sollicitudin. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam laoreet nec ante sed eleifend. Quisque non ligula tempus, volutpat urna in, pulvinar felis. Proin arcu mauris, viverra vitae interdum vitae, pretium non erat.</Text>
              <Text>Vestibulum at turpis eget elit fringilla aliquet et vitae lectus. Fusce nisl elit, pretium sit amet auctor in, aliquam vitae velit. Vivamus risus metus, mollis quis tortor ut, ullamcorper finibus magna. Sed facilisis tellus justo. Praesent lacinia a justo non pellentesque. Vivamus eget auctor magna. Suspendisse molestie diam id erat pulvinar eleifend. Fusce laoreet diam non eros congue fermentum. Suspendisse potenti. Aliquam erat volutpat. Donec scelerisque consequat arcu, ac dapibus magna suscipit sit amet. Morbi sit amet odio ac purus imperdiet ornare at sed dui. Fusce diam lorem, malesuada at molestie nec, ornare vel dolor.</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a massa vulputate, convallis augue eget, volutpat nisl. Fusce quam arcu, tincidunt et orci eget, efficitur finibus erat. Ut ut mollis lacus, vel semper magna. Proin a tempus dolor, vitae vestibulum tellus. Mauris sit amet elementum ex. Curabitur ultricies congue urna, quis dignissim risus auctor ultricies. Ut at magna non magna elementum mattis in at ex. Duis lorem arcu, aliquet quis dignissim eu, gravida quis tortor. Sed porttitor fermentum sem, elementum dapibus felis suscipit nec. Fusce nisi mi, aliquam gravida efficitur vel, vestibulum nec lorem.</Text>
              <Text>Proin eu semper lectus. Quisque egestas dignissim tellus, volutpat hendrerit turpis aliquam id. Etiam non efficitur ipsum. Pellentesque dignissim est at suscipit feugiat. Nullam ultricies suscipit tempor. Vestibulum vitae metus nec metus interdum bibendum id ac velit. Proin non ultricies quam. Morbi volutpat elit vel metus mattis, ut finibus mi sollicitudin. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam laoreet nec ante sed eleifend. Quisque non ligula tempus, volutpat urna in, pulvinar felis. Proin arcu mauris, viverra vitae interdum vitae, pretium non erat.</Text>
              <Text>Vestibulum at turpis eget elit fringilla aliquet et vitae lectus. Fusce nisl elit, pretium sit amet auctor in, aliquam vitae velit. Vivamus risus metus, mollis quis tortor ut, ullamcorper finibus magna. Sed facilisis tellus justo. Praesent lacinia a justo non pellentesque. Vivamus eget auctor magna. Suspendisse molestie diam id erat pulvinar eleifend. Fusce laoreet diam non eros congue fermentum. Suspendisse potenti. Aliquam erat volutpat. Donec scelerisque consequat arcu, ac dapibus magna suscipit sit amet. Morbi sit amet odio ac purus imperdiet ornare at sed dui. Fusce diam lorem, malesuada at molestie nec, ornare vel dolor.</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a massa vulputate, convallis augue eget, volutpat nisl. Fusce quam arcu, tincidunt et orci eget, efficitur finibus erat. Ut ut mollis lacus, vel semper magna. Proin a tempus dolor, vitae vestibulum tellus. Mauris sit amet elementum ex. Curabitur ultricies congue urna, quis dignissim risus auctor ultricies. Ut at magna non magna elementum mattis in at ex. Duis lorem arcu, aliquet quis dignissim eu, gravida quis tortor. Sed porttitor fermentum sem, elementum dapibus felis suscipit nec. Fusce nisi mi, aliquam gravida efficitur vel, vestibulum nec lorem.</Text>
              <Text>Proin eu semper lectus. Quisque egestas dignissim tellus, volutpat hendrerit turpis aliquam id. Etiam non efficitur ipsum. Pellentesque dignissim est at suscipit feugiat. Nullam ultricies suscipit tempor. Vestibulum vitae metus nec metus interdum bibendum id ac velit. Proin non ultricies quam. Morbi volutpat elit vel metus mattis, ut finibus mi sollicitudin. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam laoreet nec ante sed eleifend. Quisque non ligula tempus, volutpat urna in, pulvinar felis. Proin arcu mauris, viverra vitae interdum vitae, pretium non erat.</Text>
              <Text>Vestibulum at turpis eget elit fringilla aliquet et vitae lectus. Fusce nisl elit, pretium sit amet auctor in, aliquam vitae velit. Vivamus risus metus, mollis quis tortor ut, ullamcorper finibus magna. Sed facilisis tellus justo. Praesent lacinia a justo non pellentesque. Vivamus eget auctor magna. Suspendisse molestie diam id erat pulvinar eleifend. Fusce laoreet diam non eros congue fermentum. Suspendisse potenti. Aliquam erat volutpat. Donec scelerisque consequat arcu, ac dapibus magna suscipit sit amet. Morbi sit amet odio ac purus imperdiet ornare at sed dui. Fusce diam lorem, malesuada at molestie nec, ornare vel dolor.</Text>
            </View>
          </Animated.View>
        </PanGestureHandler>
      </AnimatedScrollView>
    </View>
  );
};

SharedElementSecondScreen.sharedElements = (navigation, otherNavigation, showing) => {
  return ['image'];
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'lightgrey'
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};

export default SharedElementSecondScreen;
