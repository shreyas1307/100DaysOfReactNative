import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Header = () => {
  return <Text style={styles.Header}>Weather App</Text>;
};

const styles = StyleSheet.create({
  Header: {
    // margin: 5,
    width: '100%',
    padding: 12,
    backgroundColor: 'grey',
    color: 'white',
    textAlign: 'center',
  },
});

export default Header;
