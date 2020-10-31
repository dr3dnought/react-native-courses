/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HeaderStyleTextComponent from './src/components/HeaderStyleTextComponent';
import CommonStyleText from './src/components/CommonStyleTextComponent';
import ShowMessageButton from './src/components/ShowMessageComponent';
import NewsScreen from './src/screens/NewsScreen';


const App: () => React$Node = () => {
  return (
    <NewsScreen/>
  )
};

export default App;
