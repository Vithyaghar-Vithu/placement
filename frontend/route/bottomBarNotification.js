import React,{ useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, useColorScheme } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DashboardPage from '../screens/student/dashboard';
import JobsPage from '../screens/student/jobs';
import ProfilePage from '../screens/student/profile';
import NotificationPage from '../screens/student/notifications';
import Screen from '../screens/screens';
import Header from "../components/header";

const Tab = createMaterialBottomTabNavigator();

// const StudentTab=[
//     { route: 'DashboardPage',    label: 'Dashboard',     type: '', icon: 'home', component: Screen, tabBarColor: '#50223C'},
//     { route: 'JobsPage',         label: 'Jobs',          type: '', icon: 'home', component: Screen, tabBarColor: '#50223C'},
//     { route: 'Profile',          label: 'Profile',       type: '', icon: 'home', component: Screen, tabBarColor: '#50223C'},
//     { route: 'NotificationPage', label: 'Notifications', type: '', icon: 'home', component: Screen, tabBarColor: '#50223C'},
// ];

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
        tabBarOptions={{
          style:{
            backgroundColor:"#50223C",
            width: 344,
            height: 66,
        
          }
        }}
        initialRouteName='DashboardPage'
        activeColor='#50223C'
        inactiveColor='#F0DAC5'
        barStyle={styles.navBar}
    >
      <Tab.Screen name="Dashboard" component={DashboardPage} />
      <Tab.Screen name="Jobs" component={JobsPage} />
      <Tab.Screen name='Profile' component={ProfilePage} />
      <Tab.Screen name='Notifications' component={NotificationPage}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    navBar:{
      width:344,
      height:66,
      borderRadius:20,
      backgroundColor:"#50223C"
    },
});