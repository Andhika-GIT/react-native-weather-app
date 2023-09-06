import React from 'react';
import { Text, View } from 'react-native';

// style
import { s } from './MeteoAdvanced.style';

// components
import Txt from '../Txt/Txt';

const MeteoAdvanced = ({ sunrise, sunset, windspeed }) => {
  return (
    <View style={s.container}>
      <View style={s.item}>
        <Txt style={{ fontSize: 20 }}>test{sunrise}</Txt>
        <Txt style={{ fontSize: 15 }}>Sunrise</Txt>
      </View>
      <View style={s.item}>
        <Txt style={{ fontSize: 20 }}>test{sunset}</Txt>
        <Txt style={{ fontSize: 15 }}>Sunset</Txt>
      </View>
      <View style={s.item}>
        <Txt style={{ fontSize: 20 }}>test{windspeed}</Txt>
        <Txt style={{ fontSize: 15 }}>WindSpeed</Txt>
      </View>
    </View>
  );
};

export default MeteoAdvanced;
