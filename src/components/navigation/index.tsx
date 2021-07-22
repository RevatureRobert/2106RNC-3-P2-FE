/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import * as React from 'react';
 import { ColorSchemeName, Text } from 'react-native';
 import LandingScreen from '../../screens/Landing';
 import LoginScreen from '../../screens/Login';
 import NotFoundScreen from '../../screens/NotFoundScreen';
 import RegisterScreen from '../../screens/Register';
 import { AuthStackParamList, RootStackParamList } from '../types';
 import BottomTabNavigator from './BottomTabNavigation';
 import LinkingConfiguration from './LinkingConfiguration';
 
 const Stack = createStackNavigator();

 //navigation will not go into BottomTabNavigator as AWS cognito throws issues
 export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
     <NavigationContainer
       linking={LinkingConfiguration}
       fallback={<Text>Loading...</Text>}
       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={BottomTabNavigator} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </Stack.Navigator>
     </NavigationContainer>
   );
 }
 
 // A root stack navigator is often used for displaying modals on top of all other content
 // Read more here: https://reactnavigation.org/docs/modal
