import { useEffect, useState, useCallback } from 'react';

import { StatusBar } from 'expo-status-bar';
import { View, Text, ImageBackground } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// style
import { s } from './App.style';

// pages
import Forecasts from './pages/Forecasts/Forecasts';
import Home from './pages/Home/Home';

// image
import backgroundImg from './assets/background.png';

// locations
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

// api func
import { fetchWeatherByCoordinates, fetchCityByCoordinates } from './api/meteo';

// fonts
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// react-navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// create stack of navigator
const Stack = createNativeStackNavigator();

// remove the default react-navigation theme
const navTheme = {
  dark: false,
  colors: {
    background: 'transparent',
  },
};

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
  const [city, setCity] = useState<string | null | undefined>();

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherFromCoordinates();
      fetchCityFromCoordinates();
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

  const fetchCityFromCoordinates = async () => {
    const cityRes = await fetchCityByCoordinates(coordinates);
    setCity(cityRes);
  };

  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground imageStyle={s.img} style={s.img_background} source={backgroundImg}>
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>
            {isFontsLoaded && weather && (
              <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }} initialRouteName="Home">
                <Stack.Screen name="Home">{() => <Home city={city} weather={weather} />}</Stack.Screen>
                <Stack.Screen name="Forecasts" component={Forecasts} />
              </Stack.Navigator>
            )}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}
