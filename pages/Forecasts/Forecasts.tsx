import { View, Text } from 'react-native';
import React from 'react';
import Txt from '../../components/Txt/Txt';

// react-navigation
import { useRoute } from '@react-navigation/native';

const Forecasts = () => {
  const { params } = useRoute();
  console.log(params);
  return <Txt>Forecasts</Txt>;
};

export default Forecasts;
