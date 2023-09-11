import { View, Text, Image } from 'react-native';
import React from 'react';

// types
import { ForecastListItemProps } from './types';

// components
import Txt from '../Txt/Txt';

// style
import { s } from './ForecastListItem.style';

const ForecastListItem: React.FC<ForecastListItemProps> = ({ image, day, date, temperature }) => {
  return (
    <View style={s.container}>
      <Image style={s.image} source={image} />
      <Txt style={s.day}>{day}</Txt>
      <Txt style={s.date}>{date}</Txt>
      <Txt style={s.temperature}>{temperature}°</Txt>
    </View>
  );
};

export default ForecastListItem;
