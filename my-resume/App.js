import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResumeFormScreen from './screens/ResumeForm';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ResumeForm" options={{ title:'Resume Form'}} component={ResumeFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;