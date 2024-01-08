import React,{ useState } from 'react';
import {ScrollView, StyleSheet,Text, TouchableOpacity, View } from 'react-native';
import Dates_Company from './date_company';

const sigin=[
    {onPress: "", onPressIn: "", }
];

export default function SignInButton(){
  // const colorScheme = useColorScheme();

  return (
    <TouchableOpacity style={styles.signinContainer}>
        <Text style={styles.signinText}> 
            Sign In
        </Text>
    </TouchableOpacity>
  );
}
const styles=StyleSheet.create({
    signinContainer:{
        width:200,
        height:50,
        verticalAlign:"middle",
        backgroundColor:'#1C2340',
        justifyContent:"center",
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    },
    signinText:{
        color:"#F0DAC5",
        // backgroundColor:"#fff",
        textAlign:"center",
        fontSize:25,
    }
})