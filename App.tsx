import { useEffect, useState } from 'react';

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

export default function App() {
  const [coordinates, setCoordinates] = useState<{ lat: string | number; lng: string | number } | null>();

  useEffect(() => {
    getUserCoordinates();
  }, []);

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

  console.log(coordinates);
  return (
    <ImageBackground imageStyle={s.img} style={s.img_background} source={backgroundImg}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
