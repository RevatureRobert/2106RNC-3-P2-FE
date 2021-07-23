/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from "../hooks/useColorScheme";
import LogoutScreen from "../../screens/Logout";
import { BottomTabParamList, LogoutParamList, PostFeedParamList, ProfileParamList } from '../types';
import PostFeedScreen from "../../screens/PostFeed";
import Profile from '../../screens/Profile';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator () {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="PostFeed"
            tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
            <BottomTab.Screen
              name="PostFeed"
              component={PostFeedNavigator}
              options={{
                tabBarIcon: ({ color }) => <PostFeedIcon name="home" color={color} />,
              }}
            />
            <BottomTab.Screen
              name="Profile"
              component={ProfileNavigator}
              options={{
                tabBarIcon: ({ color }) => <ProfileIcon name="user" color={color} />,
            }}
            />
            <BottomTab.Screen
              name="Logout"
              component={LogoutNavigator}
              options={{
                tabBarIcon: ({ color }) => <LogoutIcon name="lock" color={color} />,
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

function LogoutIcon(props: { name: React.ComponentProps<typeof AntDesign>['name']; color: string }) {
  return <AntDesign size={30} style={{marginBottom: -3}} {...props} />;
}

function ProfileIcon(props: { name: React.ComponentProps<typeof AntDesign>['name']; color: string }) {
  return <AntDesign size={30} style={{marginBottom: -3}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const LogoutStack = createStackNavigator<LogoutParamList>();

function LogoutNavigator() {
  return (
    <LogoutStack.Navigator>
      <LogoutStack.Screen
        name="Logout"
        component={LogoutScreen}
        options={{ 
          headerTitle: "Logout",
          headerTitleStyle: {
            color: "#1d3354",
            alignSelf: "flex-end"
          },
          headerStyle: {
            backgroundColor:'#9fc2cc'
          }
        }}
      />
    </LogoutStack.Navigator>
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
          headerTitle: "What's New?",
          headerTitleStyle: {
            color: "#1d3354",
            alignSelf: "flex-end"
          },
          headerStyle: {
            backgroundColor:'#9fc2cc'
          }
        }}
      />
    </PostFeedStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{ 
          headerTitle: "Profile",
          headerTitleStyle: {
            color: "#1d3354",
            alignSelf: "flex-end"
          },
          headerStyle: {
            backgroundColor:'#9fc2cc'
          }}
        }
      />
    </ProfileStack.Navigator>
  );
}