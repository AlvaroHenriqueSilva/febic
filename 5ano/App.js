import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Home from './screens/Home'
import List from './screens/List'
import Diary from './screens/Diary'
import Event from './screens/Event'
import ListEvents from './screens/ListEvents';
import Libary from './screens/Libary';
import LivrosPDF from './screens/LivrosPDF';
import LivrosEbook from './screens/LivrosEbook';
import LivrosVideo from './screens/LivrosVideo';
import LivrosAudio from './screens/LivrosAudio';
import LivrosPodcast from './screens/LivrosPodcast';
import LivrosDominio from './screens/LivrosDominio';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inkfree': require('./assets/fonts/Inkfree.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <Stack.Navigator>
        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="Home" 
          component={Home} />

        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="List" 
          component={List} />

        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="Diary" 
          component={Diary} />

        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="Event" 
          component={Event} />

        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="ListEvents" 
          component={ListEvents} />

        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="Libary" 
          component={Libary} />

        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="LivrosPDF" 
          component={LivrosPDF} />

        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="LivrosEbook" 
          component={LivrosEbook} />

        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="LivrosVideo" 
          component={LivrosVideo} />

        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="LivrosAudio" 
          component={LivrosAudio} />

        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="LivrosPodcast" 
          component={LivrosPodcast} />


        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="LivrosDominio" 
          component={LivrosDominio} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}