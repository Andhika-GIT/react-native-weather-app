import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// componnents
import Txt from '../Txt/Txt';

import { s } from './MeteoBasic.style';

const MeteoBasic = () => {
  return (
    <>
      <View style={s.clock}>
        <Txt>Clock</Txt>
      </View>
      <View style={s.city}>
        <Txt>City</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt>Sunny</Txt>
      </View>
      <View style={s.temperature_box}>
        <Txt style={s.temperature}>3</Txt>
        <Image style={s.image} />
      </View>
    </>
  );
};

export default MeteoBasic;
