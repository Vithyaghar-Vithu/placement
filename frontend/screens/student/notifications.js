import React,{ useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, useColorScheme } from 'react-native';
import Jobs from '../../components/Job';
import Header from '../../components/header';
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from '../../route/bottomBarNotification';
import Notification from '../../components/Notification';

export const NotificationPage = ({ route , navigation }) => {
  // const colorScheme = useColorScheme();
  return (
    // <NavigatorContainer>
    // <Navi
    
      <View style={styles.openingPage}>
        <ImageBackground source={require('../../assets/bg.png')} resizeMode='repeat' imageStyle= {{opacity:0.1}}>
          <View style={styles.container}>
              <View style={styles.innerContainer}>

                <Header/>

                <ScrollView 
                    style= {styles.notificationContainer}
                    contentContainerStyle={styles.notificationContainer1}
                >
                    <View style={styles.dayWrapper}>
                        <Text style={styles.dayText}>
                            MONDAY
                        </Text>
                        <Notification/>
                        <Notification/>
                        <Notification/>
                    </View>
                    <View style={styles.dayWrapper}>
                        <Text style={styles.dayText}>
                            MONDAY
                        </Text>
                        <Notification/>
                        <Notification/>
                        <Notification/>
                    </View>
                    <View style={styles.dayWrapper}>
                        <Text style={styles.dayText}>
                            MONDAY
                        </Text>
                        <Notification/>
                        <Notification/>
                        <Notification/>
                    </View>
                </ScrollView>

              </View>
          </View>
        </ImageBackground>
      </View>

    // </NavigatorContainer>
  );
};

const styles = StyleSheet.create({
  openingPage:{
    backgroundColor:'#F0DAC5',
    position:'relative'
  },
  container:{
    // justifyContent: 'center',
    height:'100%',
    width:'100%',

  },
  innerContainer:{
    alignItems:'center',
    justifyContent: 'center',
    // backgroundColor:'#000'
  },
  notificationContainer:{
    height:"85%",
    width:"90%",
    // backgroundColor:"#fff",
    flexDirection:"column",
    overflow:"scroll",
    alignContent:"center",
  },
  notificationContainer1:{
    alignItems:"center",
  },
  dayWrapper:{

  },
  dayText:{
    fontSize:15,
    marginTop:5,
    // marginBottom:5,
    
  },
});
  
export default NotificationPage;

