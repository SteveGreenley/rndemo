import React, { useState } from 'react';
import { View, LayoutAnimation } from 'react-native';
import BarGraph from '../../components/bar-graph';
import { weeklyData } from '../../lib/utils';

const dummyWeeklyData = weeklyData
  .map((i) => ({
    ...i,
    usageDollars: Math.round(Math.random() * 7000) / 100
  }));

const BarChartScreen = (props) => {
  const [containerHeight, setContainerHeight] = useState(1);
  console.log('!!! containerHeight', containerHeight);
  return (
    <View
      style={styles.container}
      onLayout={({ nativeEvent: { layout: { height } } })=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setContainerHeight(height);
      }}
    >
      <BarGraph
        data={dummyWeeklyData}
        containerHeight={containerHeight}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default BarChartScreen;
