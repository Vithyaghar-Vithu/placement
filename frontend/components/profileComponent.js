import React,{ useState } from 'react';
import {ScrollView, StyleSheet,Text, TouchableOpacity, View } from 'react-native';
import Dates_Company from './date_company';

export default function ProfileComponent(){
  // const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            
        </View>
        <Text style={styles.profileText}>
            Vithyaghar1506@gmail.com
        </Text>
    </View>
  );
}
const styles=StyleSheet.create({
    container:{
        height:40,
        width:230,
        // backgroundColor:"#000",
        marginLeft:10,
        marginTop:5,
        flexDirection:"row"
    },
    iconContainer:{
        height:36,
        width:36,
        margin:2,
        backgroundColor:"#fff"
    },
    profileText:{
        marginLeft:5,
        fontSize:13,
        color:"#F0DAC5",
        textAlignVertical:"center",

    }
})