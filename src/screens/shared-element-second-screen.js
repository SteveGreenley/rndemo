import React from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { Icon } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';
import Animated, {
  useCode, block, lessThan, cond, set, call
} from 'react-native-reanimated';
import { onScrollEvent, useValues } from 'react-native-redash/lib/module/v1';

const { width, height } = Dimensions.get('window');

const headerHeight = height / 3;
const PULL_DOWN_TRIGGER_VALUE = 50;

const SharedElementSecondScreen = (props) => {
  const { goBack } = useNavigation();
  const [scrollY, backTriggered] = useValues(0, 0);
  useCode(() =>
    block([
      cond(
        lessThan(scrollY, -PULL_DOWN_TRIGGER_VALUE),
        set(backTriggered, 1)
      ),
      cond(
        backTriggered,
        call([], () => goBack())
      )
    ]),
  [scrollY, backTriggered]
  );

  const scale = scrollY.interpolate({
    inputRange: [-PULL_DOWN_TRIGGER_VALUE,0],
    outputRange: [0.9, 1],
    extrapolate: 'clamp'
  });
  const borderRadius = scrollY.interpolate({
    inputRange: [-PULL_DOWN_TRIGGER_VALUE,0],
    outputRange: [15, 0],
    extrapolate: 'clamp'
  });
  const closeButtonOpacity = scrollY.interpolate({
    inputRange: [-20,0],
    outputRange: [0,1],
    extrapolate: 'clamp'
  });

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        onScroll = {onScrollEvent({ y: scrollY })}
        style={{
          ...styles.overlay,
          transform: [{ scale:scale }],
          borderRadius,
        }}
        contentContainerStyle={{
          backgroundColor: 'white',
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        }}
      >
        <Animated.View>
          <SharedElement id="image">
            <View>
              <Animated.Image
                source={require('../../assets/viaduct-harbour-sunset-auckland-new-zealand-AUCKLAND1118.jpg')}
                style={{
                  width,
                  height: headerHeight,
                  resizeMode: 'cover',
                  borderTopRightRadius: borderRadius,
                  borderTopLeftRadius: borderRadius
                }}
              />
            </View>
          </SharedElement>

          <Text>SharedElementSecondScreen</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a massa vulputate, convallis augue eget, volutpat nisl. Fusce quam arcu, tincidunt et orci eget, efficitur finibus erat. Ut ut mollis lacus, vel semper magna. Proin a tempus dolor, vitae vestibulum tellus. Mauris sit amet elementum ex. Curabitur ultricies congue urna, quis dignissim risus auctor ultricies. Ut at magna non magna elementum mattis in at ex. Duis lorem arcu, aliquet quis dignissim eu, gravida quis tortor. Sed porttitor fermentum sem, elementum dapibus felis suscipit nec. Fusce nisi mi, aliquam gravida efficitur vel, vestibulum nec lorem.</Text>
          <Text>Proin eu semper lectus. Quisque egestas dignissim tellus, volutpat hendrerit turpis aliquam id. Etiam non efficitur ipsum. Pellentesque dignissim est at suscipit feugiat. Nullam ultricies suscipit tempor. Vestibulum vitae metus nec metus interdum bibendum id ac velit. Proin non ultricies quam. Morbi volutpat elit vel metus mattis, ut finibus mi sollicitudin. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam laoreet nec ante sed eleifend. Quisque non ligula tempus, volutpat urna in, pulvinar felis. Proin arcu mauris, viverra vitae interdum vitae, pretium non erat.</Text>
          <Text>Vestibulum at turpis eget elit fringilla aliquet et vitae lectus. Fusce nisl elit, pretium sit amet auctor in, aliquam vitae velit. Vivamus risus metus, mollis quis tortor ut, ullamcorper finibus magna. Sed facilisis tellus justo. Praesent lacinia a justo non pellentesque. Vivamus eget auctor magna. Suspendisse molestie diam id erat pulvinar eleifend. Fusce laoreet diam non eros congue fermentum. Suspendisse potenti. Aliquam erat volutpat. Donec scelerisque consequat arcu, ac dapibus magna suscipit sit amet. Morbi sit amet odio ac purus imperdiet ornare at sed dui. Fusce diam lorem, malesuada at molestie nec, ornare vel dolor.</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a massa vulputate, convallis augue eget, volutpat nisl. Fusce quam arcu, tincidunt et orci eget, efficitur finibus erat. Ut ut mollis lacus, vel semper magna. Proin a tempus dolor, vitae vestibulum tellus. Mauris sit amet elementum ex. Curabitur ultricies congue urna, quis dignissim risus auctor ultricies. Ut at magna non magna elementum mattis in at ex. Duis lorem arcu, aliquet quis dignissim eu, gravida quis tortor. Sed porttitor fermentum sem, elementum dapibus felis suscipit nec. Fusce nisi mi, aliquam gravida efficitur vel, vestibulum nec lorem.</Text>
          <Text>Proin eu semper lectus. Quisque egestas dignissim tellus, volutpat hendrerit turpis aliquam id. Etiam non efficitur ipsum. Pellentesque dignissim est at suscipit feugiat. Nullam ultricies suscipit tempor. Vestibulum vitae metus nec metus interdum bibendum id ac velit. Proin non ultricies quam. Morbi volutpat elit vel metus mattis, ut finibus mi sollicitudin. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam laoreet nec ante sed eleifend. Quisque non ligula tempus, volutpat urna in, pulvinar felis. Proin arcu mauris, viverra vitae interdum vitae, pretium non erat.</Text>
          <Text>Vestibulum at turpis eget elit fringilla aliquet et vitae lectus. Fusce nisl elit, pretium sit amet auctor in, aliquam vitae velit. Vivamus risus metus, mollis quis tortor ut, ullamcorper finibus magna. Sed facilisis tellus justo. Praesent lacinia a justo non pellentesque. Vivamus eget auctor magna. Suspendisse molestie diam id erat pulvinar eleifend. Fusce laoreet diam non eros congue fermentum. Suspendisse potenti. Aliquam erat volutpat. Donec scelerisque consequat arcu, ac dapibus magna suscipit sit amet. Morbi sit amet odio ac purus imperdiet ornare at sed dui. Fusce diam lorem, malesuada at molestie nec, ornare vel dolor.</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a massa vulputate, convallis augue eget, volutpat nisl. Fusce quam arcu, tincidunt et orci eget, efficitur finibus erat. Ut ut mollis lacus, vel semper magna. Proin a tempus dolor, vitae vestibulum tellus. Mauris sit amet elementum ex. Curabitur ultricies congue urna, quis dignissim risus auctor ultricies. Ut at magna non magna elementum mattis in at ex. Duis lorem arcu, aliquet quis dignissim eu, gravida quis tortor. Sed porttitor fermentum sem, elementum dapibus felis suscipit nec. Fusce nisi mi, aliquam gravida efficitur vel, vestibulum nec lorem.</Text>
          <Text>Proin eu semper lectus. Quisque egestas dignissim tellus, volutpat hendrerit turpis aliquam id. Etiam non efficitur ipsum. Pellentesque dignissim est at suscipit feugiat. Nullam ultricies suscipit tempor. Vestibulum vitae metus nec metus interdum bibendum id ac velit. Proin non ultricies quam. Morbi volutpat elit vel metus mattis, ut finibus mi sollicitudin. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam laoreet nec ante sed eleifend. Quisque non ligula tempus, volutpat urna in, pulvinar felis. Proin arcu mauris, viverra vitae interdum vitae, pretium non erat.</Text>
          <Text>Vestibulum at turpis eget elit fringilla aliquet et vitae lectus. Fusce nisl elit, pretium sit amet auctor in, aliquam vitae velit. Vivamus risus metus, mollis quis tortor ut, ullamcorper finibus magna. Sed facilisis tellus justo. Praesent lacinia a justo non pellentesque. Vivamus eget auctor magna. Suspendisse molestie diam id erat pulvinar eleifend. Fusce laoreet diam non eros congue fermentum. Suspendisse potenti. Aliquam erat volutpat. Donec scelerisque consequat arcu, ac dapibus magna suscipit sit amet. Morbi sit amet odio ac purus imperdiet ornare at sed dui. Fusce diam lorem, malesuada at molestie nec, ornare vel dolor.</Text>

        </Animated.View>

      </Animated.ScrollView>
      <SafeAreaView
        pointerEvents="box-none"
        style={{
          ...styles.overlay,
          alignItems: 'flex-end',
          margin: 20
        }}
      >
        <Animated.View
          style={{ opacity: closeButtonOpacity }}
        >
          <Icon
            name="close"
            type="material-community"
            color="grey"
            reverseColor="whitesmoke"
            reverse
            onPress={()=>{
              goBack();
            }}
          />
        </Animated.View>
      </SafeAreaView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFill
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  colorBlue: {
    backgroundColor: 'blue'
  },
  colorPink: {
    backgroundColor: 'rgba(255,100,100,0.4)'
  },
  colorGreen: {
    backgroundColor: 'limegreen'
  }
};

export default SharedElementSecondScreen;
