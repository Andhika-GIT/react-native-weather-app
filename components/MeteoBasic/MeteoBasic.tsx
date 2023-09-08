import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

// react-navigation
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// componnents
import Txt from '../Txt/Txt';

// types
import { MeteoProps, RootStackParamList } from './types';

import { s } from './MeteoBasic.style';
import Clock from '../Clock/Clock';

const MeteoBasic: React.FC<MeteoProps> = ({ temperature, interpretation, city, dailyWeather }) => {
  const nav = useNavigation();
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>

      <View style={s.city}>
        <Txt>{city}</Txt>
      </View>

      <View style={s.interpretation}>
        <Txt style={s.interpretation_txt}>{interpretation?.label}</Txt>
      </View>

      <View style={s.temperature_box}>
        <TouchableOpacity onPress={() => nav.navigate('Forecasts', { city, ...dailyWeather })}>
          <Txt style={s.temperature}>{temperature}°</Txt>
        </TouchableOpacity>
        <Image style={s.image} source={interpretation?.image} />
      </View>
    </>
  );
};

export default MeteoBasic;
