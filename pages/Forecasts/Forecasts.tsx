import { View, Text } from 'react-native';
import React from 'react';
import Txt from '../../components/Txt/Txt';

// react-navigation
import { useRoute } from '@react-navigation/native';

// component
import Header from '../../components/Header/Header';
import ForecastListItem from '../../components/ForecastListItem/ForecastListItem';

const Forecasts = () => {
  const { params } = useRoute();
  return (
    <>
      <Header city={params?.city} />
      <ForecastListItem image={require('../../assets/clouds.png')} day={'MON'} date={'03/11/2023'} temperature={3} />
      <ForecastListItem image={require('../../assets/clouds.png')} day={'MON'} date={'03/11/2023'} temperature={3} />
      <ForecastListItem image={require('../../assets/clouds.png')} day={'MON'} date={'03/11/2023'} temperature={3} />
      <ForecastListItem image={require('../../assets/clouds.png')} day={'MON'} date={'03/11/2023'} temperature={3} />
      <ForecastListItem image={require('../../assets/clouds.png')} day={'MON'} date={'03/11/2023'} temperature={3} />
      <ForecastListItem image={require('../../assets/clouds.png')} day={'MON'} date={'03/11/2023'} temperature={3} />
    </>
  );
};

export default Forecasts;
