import { View, Text, FlatList } from 'react-native';
import React from 'react';
import Txt from '../../components/Txt/Txt';

// types
import { ForecastsParams } from './types';

// react-navigation
import { useRoute, RouteProp } from '@react-navigation/native';

// component
import Header from '../../components/Header/Header';
import ForecastListItem from '../../components/ForecastListItem/ForecastListItem';

// utils
import { DAYS, getWeatherInterpretation } from '../../utils/meteo-utils';

const Forecasts = () => {
  const { params } = useRoute<RouteProp<ForecastsParams, 'Details'>>();

  const forecastList = (
    <View style={{ marginTop: 50 }}>
      <FlatList
        data={params?.time}
        renderItem={({ item, index }) => {
          const weatherCode = params?.weathercode[index];
          const image = getWeatherInterpretation(weatherCode)?.image;
          const temperature = params?.temperature_2m_max[index];
          const date = new Date(item);
          const dayOfTheWeek = DAYS[date.getDay()];
          const formatedDate = date.toLocaleDateString('default', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          });
          return <ForecastListItem image={image} day={dayOfTheWeek} date={formatedDate} temperature={temperature} />;
        }}
        keyExtractor={(item, index) => item}
      />
    </View>
  );
  return (
    <>
      <Header city={params?.city} />
      {forecastList}
    </>
  );
};

export default Forecasts;
