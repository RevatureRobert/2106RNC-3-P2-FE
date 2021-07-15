/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from "../hooks/useColorScheme";
import LoginScreen from "../../screens/Login";
import { BottomTabParamList, LoginParamList, PostFeedParamList } from '../types';
import PostFeedScreen from "../../screens/PostFeed";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator () {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Login"
            tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
            <BottomTab.Screen
              name="Login"
              component={LoginNavigator}
              options={{
                tabBarIcon: ({ color }) => <LoginIcon name="lock" color={color} />,
            }}
            />
            <BottomTab.Screen
              name="PostFeed"
              component={PostFeedNavigator}
              options={{
                tabBarIcon: ({ color }) => <PostFeedIcon name="home" color={color} />,
              }}
          />
        </BottomTab.Navigator>
    )
}


// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/  
function PostFeedIcon(props: { name: React.ComponentProps<typeof AntDesign>['name']; color: string }) {
  return <AntDesign size={30} style={{marginBottom: -3}} {...props} />;
}

function LoginIcon(props: { name: React.ComponentProps<typeof AntDesign>['name']; color: string }) {
  return <AntDesign size={30} style={{marginBottom: -3}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const LoginStack = createStackNavigator<LoginParamList>();

function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ 
          headerTitle: 'Login'
        }}
      />
    </LoginStack.Navigator>
  );
}

const PostFeedStack = createStackNavigator<PostFeedParamList>();

function PostFeedNavigator() {
  return (
    <PostFeedStack.Navigator>
      <PostFeedStack.Screen
        name="PostFeed"
        component={PostFeedScreen}
        options={{ 
          headerTitle: 'Social Justice Warriors'
          
        }}
      />
    </PostFeedStack.Navigator>
  );
}