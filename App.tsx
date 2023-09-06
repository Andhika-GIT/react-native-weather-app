import { useEffect, useState, useCallback } from 'react';

import { StatusBar } from 'expo-status-bar';
import { View, Text, ImageBackground } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// style
import { s } from './App.style';
import Home from './pages/Home/Home';

// image
import backgroundImg from './assets/background.png';

// locations
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

// api func
import { fetchWeatherByCoordinates } from './api/meteo';

// fonts
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  // fonts
  const [isFontsLoaded] = useFonts({
    'Alata-Regular': require('./assets/fonts/Alata-Regular.ttf'),
  });

  const [coordinates, setCoordinates] = useState<{
    lat: string | number;
    lng: string | number;
  } | null>();

  const [weather, setWeather] = useState<any>();

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherFromCoordinates();
    }
  }, [coordinates]);

  const getUserCoordinates: () => void = async () => {
    const { status } = await requestForegroundPermissionsAsync();

    if (status === 'granted') {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoordinates({ lat: '48.85', lng: '2.35' });
    }
  };

  const fetchWeatherFromCoordinates = async () => {
    const weatherRes = await fetchWeatherByCoordinates(coordinates);
    setWeather(weatherRes);
  };

  console.log(coordinates);
  console.log(weather);
  return (
    <ImageBackground imageStyle={s.img} style={s.img_background} source={backgroundImg}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>{isFontsLoaded && weather && <Home weather={weather} />}</SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
