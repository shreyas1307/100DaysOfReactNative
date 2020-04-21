/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, ScrollView, SafeAreaView, Text, StyleSheet} from 'react-native';
import Header from './components/Header';

import {} from 'react-native/Libraries/NewAppScreen';
import Main from './components/Main';

const App = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.Main}>
          <Header />
          <Main />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
  },
});

export default App;
