import { View, Text } from 'react-native';
import React from 'react';
import Txt from '../../components/Txt/Txt';

// react-navigation
import { useRoute } from '@react-navigation/native';
import Header from '../../components/Header/Header';

const Forecasts = () => {
  const { params } = useRoute();
  return (
    <>
      <Header city={params?.city} />
    </>
  );
};

export default Forecasts;
