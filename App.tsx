import { StatusBar } from 'expo-status-bar';
import { View, Text, ImageBackground } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// style
import { s } from './App.style';
import Home from './pages/Home/Home';

// image
import backgroundImg from './assets/background.png';

export default function App() {
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
