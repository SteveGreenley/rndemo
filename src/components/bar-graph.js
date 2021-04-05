import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { AppText } from './app-text';
import { formatBalanceForBar } from '../lib/utils';

const viewabilityConfig = { viewAreaCoveragePercentThreshold: 100 };

const BarGraph = ({
  data,
  scaleFn = item => (item.usageDollars)
}) => {
  return (
    <View style={styles.graph}>
      <FlatList
        horizontal
        inverted
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item=>(item.label)}
        viewabilityConfig={viewabilityConfig}
        renderItem={({ item,index,separators }) => {
          const formattedValue = `$${formatBalanceForBar(item.usageDollars)}`;
          const isBarTooSmallForText = scaleFn(item) < 18;
          return (
            <View
              style={styles.barContainer}
            >
              {isBarTooSmallForText && (
                <View style={styles.popableTextContainer}>
                  <Text
                    style={{
                      ...styles.barText,
                      paddingVertical: 5,
                      color: 'grey'
                    }}
                  >
                    {formattedValue}
                  </Text>
                </View>
              )}
              <View
                key={item.id}
                style={{ ...styles.bar, height: scaleFn(item) }}
              >
                {!isBarTooSmallForText && (
                  <Text
                    style={{
                      ...styles.barText,
                      paddingTop: 5
                    }}>
                    {formattedValue}
                  </Text>
                )}
              </View>
              {item.label.split(' ').map((s)=>(
                <AppText key={s}>{s}</AppText>
              ))}
            </View>
          );
        }}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    alignItems: 'flex-end'
  },
  graph: {
    alignItems: 'flex-end',
  },
  barContainer: {
    alignItems: 'center'
  },
  bar: {
    width: 40,
    height: 1,
    marginHorizontal: 4,
    borderRadius: 4,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderWidth: 1,
    backgroundColor: 'mediumvioletred',
    borderColor: 'maroon',
    alignItems: 'center',
  },
  popableTextContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  barText: {
    fontSize: 10,
    color: 'white'
  }
};

export default BarGraph;
