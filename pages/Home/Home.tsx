import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { s } from './Home.style';

// components
import Txt from '../../components/Txt/Txt';
import MeteoBasic from '../../components/MeteoBasic/MeteoBasic';

const Home = () => {
  return (
    <View style={s.container}>
      <View style={s.meteo_basic}>
        <MeteoBasic />
      </View>
      <View style={s.searchbar_container}>
        <Txt>SearchBar</Txt>
      </View>
      <View style={s.meteo_advanced}>
        <Txt>Advance weather info</Txt>
      </View>
    </View>
  );
};

export default Home;
