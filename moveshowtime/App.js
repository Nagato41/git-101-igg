import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MoviesList from './screen/MoviesList';
import MovieDetail from './screen/MovieDetail';

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={
        {
          headerStyle:{

            shadowOpacity:0,
            backgroundColor:'black',
          },
          headerTintColor:'white'
          
        }
      }
    >
      <Stack.Screen
        name="MoviesList"
        component={MoviesList}
        options={
        {
          title:'Show Time'
        }
        }
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={
          {
            title: null
          }
        }
      />
    </Stack.Navigator>
  </NavigationContainer>
)


export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
});
