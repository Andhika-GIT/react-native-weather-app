import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// componnents
import Txt from '../Txt/Txt';

// types
import { MeteoProps } from './types';

import { s } from './MeteoBasic.style';

const MeteoBasic: React.FC<MeteoProps> = ({ temperature, interpretation }) => {
  console.log(interpretation);
  return (
    <>
      <View style={s.clock}>
        <Txt>Clock</Txt>
      </View>

      <View style={s.city}>
        <Txt>City</Txt>
      </View>

      <View style={s.interpretation}>
        <Txt style={s.interpretation_txt}>{interpretation?.label}</Txt>
      </View>

      <View style={s.temperature_box}>
        <Txt style={s.temperature}>{temperature}°</Txt>
        <Image style={s.image} source={interpretation?.image} />
      </View>
    </>
  );
};

export default MeteoBasic;
