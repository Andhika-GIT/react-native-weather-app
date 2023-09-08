import React from 'react';
import { Text, View } from 'react-native';

// style
import { s } from './MeteoAdvanced.style';

// components
import Txt from '../Txt/Txt';

// types
import { MeteoProps } from './types';

const MeteoAdvanced: React.FC<MeteoProps> = ({ sunrise, sunset, windspeed }) => {
  return (
    <View style={s.container}>
      <View style={s.item}>
        <Txt style={{ fontSize: 20 }}>{sunrise}</Txt>
        <Txt style={{ fontSize: 15 }}>Sunrise</Txt>
      </View>
      <View style={s.item}>
        <Txt style={{ fontSize: 20 }}>{sunset}</Txt>
        <Txt style={{ fontSize: 15 }}>Sunset</Txt>
      </View>
      <View style={s.item}>
        <Txt style={{ fontSize: 20 }}>{windspeed}</Txt>
        <Txt style={{ fontSize: 15 }}>WindSpeed</Txt>
      </View>
    </View>
  );
};

export default MeteoAdvanced;
