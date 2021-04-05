import React from 'react';
import { View } from 'react-native';
import BarGraph from '../../components/bar-graph';
import { weeklyData } from '../../lib/utils';

const dummyWeeklyData = weeklyData
  .map((i) => ({
    ...i,
    usageDollars: Math.round(Math.random() * 7000) / 100
  }));

const BarChartScreen = (props) => {
  return (
    <View style={styles.container}>
      <BarGraph
        data={dummyWeeklyData}
        scaleFn={item => (item.usageDollars * 8)}
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
