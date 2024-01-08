import React,{ useState } from 'react';
import {ScrollView, StyleSheet,Text, TouchableOpacity, View } from 'react-native';
import Dates_Company from './date_company';

export default function Applications(){
  // const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
        <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>Applications</Text>
        </View>
        <ScrollView style={styles.monthContainer}>
            <View style={styles.monthWrapper}>
                <Text style={styles.monthText}>November....................................</Text>
                <Dates_Company/>
                <Dates_Company/>
                <Dates_Company/>
            </View>
            <View style={styles.monthWrapper}>
                <Text style={styles.monthText}>December....................................</Text>
                <Dates_Company/>
                <Dates_Company/>
                <Dates_Company/>
            </View>
        </ScrollView>
    </View>
  );
}
const styles=StyleSheet.create({
    container:{
        width:150,
        height:210,
        marginLeft:12.5,
        marginRight:17,
        backgroundColor:"#1C2340",
        borderColor:"#1C2340",
        borderWidth:1,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        overflow:"scroll"
    },
    titleWrapper:{
        paddingTop:2,
        alignItems:"center",
        backgroundColor:"#1C2340",
        width:152,
        borderBottomColor:"#F0DAC5",
        borderBottomWidth:2,
    },
    titleText:{
        color:"#F0DAC5",
        fontSize:15,
        marginBottom:2,
        paddingBottom:2,
        textAlignVertical:"center",
        textAlign:"center",
        fontWeight:"400",
    },
    monthContainer:{
        marginLeft:10,
        marginRight:10,
        marginBottom:5,
        // backgroundColor:"#fff"
    },
    monthText:{
        width:130,
        // backgroundColor:"#fff",
        margin:1,
        height:13,
        fontSize:11,
        color:"#F0DAC5",
        opacity:0.5,
    }
})