import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { s } from './Home.style';

const Home = () => {
  return (
    <>
      <View style={s.meteo_basic}>
        <Text style={s.text}>Basic Weather Info</Text>
      </View>
      <View style={s.searchbar_container}>
        <Text style={s.text}>SearchBar</Text>
      </View>
      <View style={s.meteo_advanced}>
        <Text style={s.text}>Advance weather info</Text>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
