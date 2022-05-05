/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {WebView} from 'react-native-webview';
import {WRAPPER_URL} from '@env';

const App = () => {
  return (
    <WebView
      source={{uri: WRAPPER_URL}}
      style={{marginTop: 20}} // for making sure the top nav bar is untouched
    />
  );
};

export default App;
