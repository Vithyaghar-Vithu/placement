import { StatusBar } from 'expo-status-bar';
import { Appearance, ImageBackground, StyleSheet, Text, View, useColorScheme } from 'react-native';
import LandingPage from './screens/common/landing_page';
import { useEffect } from 'react';
import StudentLogin from './screens/student/student_login';
import AdminLogin from './screens/admin/admin_login';
import CompanyLogin from './screens/company/company_login';
import Profile from './screens/student/profile';
import JobsPage from './screens/student/jobs';
import NotificationPage from './screens/student/notifications';
import DashboardPage from './screens/student/dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/header';
import BottomTabNavigator from './route/bottomBarNotification';
import {  SafeAreaProvider,  useSafeAreaInsets,} from 'react-native-safe-area-context';

export default function App() {
  // const colorScheme = useColorScheme('light');
  // useEffect(() => {Appearance.setColorScheme('light')},[]);
  const Stack = createStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ header:() => <Header/> }} >
          <Stack.Screen 
            name="LandingPage" 
            component={LandingPage} 
            options={{
              headerShown:false,
            }}
          />
        
          <Stack.Screen 
            name="StudentLogin" 
            component={StudentLogin} 
            options={{
              headerShown:false,
            }}
          />
          
          <Stack.Screen 
            name="AdminLogin" 
            component={AdminLogin}
          />

          <Stack.Screen 
            name="DashboardPage" 
            component={DashboardPage}
            options={{
              title:"Dashboard",
            }}
          />
          <Stack.Screen 
            name="BottomTabNavigator" 
            component={BottomTabNavigator}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <StudentLogin/>
    // <AdminLogin/>
    // <CompanyLogin/>
    // <Profile/>
    // <JobsPage/>
    // <NotificationPage/>
    // <DashboardPage/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
