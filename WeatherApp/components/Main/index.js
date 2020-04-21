import React, {useState, useEffect} from 'react';
import {Text, TextInput, Image, View, StyleSheet} from 'react-native';
import axios from 'axios';

const Main = () => {
  const [locationName, setLocationName] = useState('');

  useEffect(() => {
    let key = '45553e207c4ad5acf751d1b9d3a9da09';
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const api = `${proxy}https://api.darksky.net/forecast/${key}/${lat},${long}`;
        axios.get(api).then((x) => console.log(x));
      });
    }
  }, [locationName]);

  return (
    <View style={styles.Main}>
      <TextInput
        value={locationName}
        placeholder="Enter a Location..."
        onChange={setLocationName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Main: {
    width: '100%',
    padding: 10,
    height: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});

export default Main;
