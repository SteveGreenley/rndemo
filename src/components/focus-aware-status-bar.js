import * as React from 'react';
import { StatusBar } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

const FocusAwareStatusBar = withNavigationFocus(({ isFocused, ...rest }) =>
  isFocused ? <StatusBar {...rest} /> : null
);

export default FocusAwareStatusBar;
