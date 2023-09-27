import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home'
import ListTasks from './screens/ListTasks';
import NewTask from './screens/NewTask';
import Menu from './screens/Menu';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ListTasks"
          component={ListTasks}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="NewTask"
          component={NewTask}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

