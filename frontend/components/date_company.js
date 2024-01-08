import React,{ useState } from 'react';
import {ScrollView, StyleSheet,Text, TouchableOpacity, View } from 'react-native';

export default function Dates_Company(){
  // const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
        <Text style={styles.dateText}>
            31
        </Text>
        <Text style={styles.companyText}>
            Company 1
        </Text>
    </View>
  );
}
const styles=StyleSheet.create({
    container:{
        // backgroundColor:"#fff",
        height:20,
        width:150,
        marginTop:5,
        flexDirection:"row",
    },
    dateText:{
        height:20,
        width:20,
        backgroundColor:"#50223C",
        fontSize:12,
        textAlign:"center",
        textAlignVertical:"center",
        color:"#F0DAC5",
        fontWeight:"600"
    },
    companyText:{
        marginLeft:5,
        fontSize:12,
        textAlign:"center",
        textAlignVertical:"center",
        color:"#F0DAC5"
    }
})