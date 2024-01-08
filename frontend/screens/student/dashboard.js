import React,{ useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, useColorScheme } from 'react-native';
import Jobs from '../../components/Job';
import Header from '../../components/header';
import BottomTabNavigator from '../../route/bottomBarNotification';
import Notification from '../../components/Notification';
import Applications from '../../components/applications';

export const DashboardPage = ({ route , navigation }) => {
  // const colorScheme = useColorScheme();
  return (
    // <NavigatorContainer>
    // <Navi
    
      <View style={styles.openingPage}>
        <ImageBackground source={require('../../assets/bg.png')} resizeMode='repeat' imageStyle= {{opacity:0.1}}>
          <View style={styles.container}>
              <View style={styles.innerContainer}>

                {/* <Header/> */}
                <View>
                    <View style={styles.topContainer}>
                        <Applications/>
                        <Applications/>
                    </View>

                    <View style={styles.topContainer}>
                        <Applications/>
                        <Applications/>
                    </View>
                </View>
                


              </View>
          </View>

          {/* <BottomTabNavigator/> */}
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
  topContainer:{
    flexDirection:"row",
    width:400,
    height:250,
    paddingLeft:10,
    alignItems:"center",
    justifyContent:"center",
    alignContent:"center",
    // backgroundColor:"#fff",
  }
});
  
export default DashboardPage;

