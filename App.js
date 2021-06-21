import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import About from './screens/About';
import ReviewDetails from './screens/ReviewDetails';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/Drawer';


const getFonts = () => {
  return Font.loadAsync({
    'noto-regular': require('./assets/fonts/NotoSansKR-Regular.otf'),
    'noto-bold': require('./assets/fonts/NotoSansKR-Bold.otf'),
    'noto-thin': require('./assets/fonts/NotoSansKR-Thin.otf'),
  })
}

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
        <Navigator />
    );
  } else {
    return (
        <AppLoading
          startAsync={getFonts}
          onFinish={() => setFontsLoaded(true)}
          onError={console.warn}
        />
    );
  }


}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
