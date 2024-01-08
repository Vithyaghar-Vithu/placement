import React,{ useState } from 'react';
import {StyleSheet,Text, TouchableOpacity, View } from 'react-native';

export default function Notification(){
  // const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
        <View style={styles.profileContainer}>
            <View>

            </View>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.textMessage}>
                Your application for "Apple - Software Engineer" has been successfully submitted
            </Text>
            <View style={styles.timeWrapper}>
                <View style={styles.iconContainer}>

                </View>
                <Text style={styles.textWrapper}>
                    15mins ago
                </Text>
            </View>
        </View>
    </View>
  );
}
const styles=StyleSheet.create({
    container:{
        width:332,
        height:75,
        marginTop:10,
        marginBottom:5,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        // borderTopLeftRadius:10,
        borderTopRightRadius:10,
        backgroundColor:"#1C2340",
        flexDirection:"row",
        overflow:"scroll"
    },
    profileContainer:{
        // position:"relative",
        width:86,
        height:86,
        left:-19,
        top:-18,
        backgroundColor:"#50223c",
        borderWidth:4,
        borderColor:"#f0dac5",
        // borderBottomColor:",
        
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        
        // objectFit:"contain"
        // fle
    },

    textContainer:{
        width:238,
        left:-5,
        height:75,
        // backgroundColor:"#fff",
    },
    textMessage:{
        width:238,
        fontSize:11,
        height:36,
        marginTop:9,
        // backgroundColor:"#000",
        color:"#fff",
    },
    timeWrapper:{
        // backgroundColor:"#fff",
        height:25,
        flexDirection:"row",
        width:75,
        justifyContent:"space-around",
    },
    iconContainer:{
        width:17,
        height:17,
        backgroundColor:"#fff",
        top:4,
        // marginTop:6.5,
        verticalAlign:"middle"
    },
    textWrapper:{
        fontSize:9,
        // backgroundColor:"#11a",
        textAlign:"center",
        textAlignVertical:"center",
        color:"#fff"
    },
})