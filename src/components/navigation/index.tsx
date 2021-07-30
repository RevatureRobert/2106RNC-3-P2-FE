/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import * as React from 'react';
 import { ColorSchemeName, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';
 import LandingScreen from '../../screens/Landing';
 import LoginScreen from '../../screens/Login';
 import NotFoundScreen from '../../screens/NotFoundScreen';
 import RegisterScreen from '../../screens/Register';
 import { AuthStackParamList, LoginParamList, RegisterParamList } from '../types';
 import BottomTabNavigator from './BottomTabNavigation';
 import LinkingConfiguration from './LinkingConfiguration';
 


 export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const Stack = createStackNavigator<AuthStackParamList>();
  const user = useSelector((state: RootStore) => state.auth);
  
  return (
     <NavigationContainer
       linking={LinkingConfiguration}
       fallback={<Text>Loading...</Text>}
       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
          user.authenticated === true ? (
            <Stack.Screen name="Main" component={BottomTabNavigator} />
          ) : (
            <>
            <Stack.Screen name="Landing" component={LandingScreen} />
            <Stack.Screen name="Login" component={LoginNavigator} />
            <Stack.Screen name="Register" component={RegisterNavigator} />
            
            </>
          )
        }
      </Stack.Navigator>
     </NavigationContainer>
   );
  }

 
 // A root stack navigator is often used for displaying modals on top of all other content
 // Read more here: https://reactnavigation.org/docs/modal

function LogoTitle() {
  return (
    <Image
    style={{width: 50, height: 50 }}
    source={require('../../assets/images/logo.png')}
    />
  )
}

const LoginStack = createStackNavigator<LoginParamList>();

function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ 
          headerTitle: "Social Justice Warriors",
          headerTitleStyle: {
            color: "#1d3354",
            alignSelf: "flex-start"
          },
          headerRight: props => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor:'#9fc2cc'
          },
          headerLeft: () => { return null },
        }}
      />
    </LoginStack.Navigator>
  );
}

const RegisterStack = createStackNavigator<RegisterParamList>();

function RegisterNavigator() {
  return (
    <RegisterStack.Navigator>
      <RegisterStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ 
          headerTitle: "Social Justice Warriors",
          headerTitleStyle: {
            color: "#1d3354",
            alignSelf: "flex-start"
          },
          headerRight: props => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor:'#9fc2cc'
          },
          headerLeft: () => { return null },
        }}
      />
    </RegisterStack.Navigator>
  );
}

/**
 *      <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginNavigator} />
        <Stack.Screen name="Register" component={RegisterNavigator} />
        <Stack.Screen name="Main" component={BottomTabNavigator} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
 */