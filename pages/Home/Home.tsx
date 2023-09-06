import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { s } from './Home.style';

// types
import { HomeProps } from './types';

// components
import Txt from '../../components/Txt/Txt';
import MeteoBasic from '../../components/MeteoBasic/MeteoBasic';
import { getWeatherInterpretation } from '../../utils/meteo-utils';

const Home: React.FC<HomeProps> = ({ weather, city }) => {
  const currentWeather = Math.round(weather?.current_weather?.temperature);
  const currentInterpretation = getWeatherInterpretation(weather.current_weather.weathercode);

  return (
    <View style={s.container}>
      <View style={s.meteo_basic}>
        <MeteoBasic city={city} interpretation={currentInterpretation} temperature={currentWeather} />
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
