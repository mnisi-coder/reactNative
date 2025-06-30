import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/home/HomeScreen';
import HomeScreen from '../screens/home/home'; // Update the path if the file is located elsewhere
import ProfileScreen from '../screens/profile/profile'; // Update the path if the file is located elsewhere
import DashboardScreen from '../screens/dashboard/DashboardScreen'; // Update the path if the file is located elsewhere

export type AppTabParamList = {
  Home: undefined;
  Dashboard: undefined;
  Profile: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<AppTabParamList>();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
