import React from 'react';
import 'react-native-gesture-handler';
import AppNavigation from './app-navigation';
import { ThemeProvider } from 'react-native-elements';
import { Platform, UIManager } from 'react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigation />
    </ThemeProvider>
  );
};

export default App;
