import React,{ useState } from 'react';
import {StyleSheet,Text, TouchableOpacity, View } from 'react-native';

export default function Jobs(){
  // const colorScheme = useColorScheme();
  return (
    <View style={styles.jobContainer}>
        <View style={styles.job}>
            <View style={styles.jobDescription}>

            <View style={styles.descriptionContainer}>
                <View style={styles.imageContainer}>
                  <View style={styles.image}>
                  </View>
                  <Text style={styles.cgpaText}>
                    8.56
                  </Text>
                </View>
                <View style={styles.companyDetails}>
                <Text style={styles.companyNameText}>
                    Apple
                </Text>
                <Text style={styles.jobRoleText}>
                    Software Engineer
                </Text>
                <Text style={styles.locationText}>
                    Bangalore
                </Text>
                </View>
            </View>

            <View style={styles.skillContainer}>
                <View style={styles.skill}>
                <Text style={styles.skillText}>
                    Java
                </Text>
                </View>
                <View style={styles.skill}>
                <Text style={styles.skillText}>
                    Java
                </Text>
                </View>
                <View style={styles.skill}>
                <Text style={styles.skillText}>
                    Java
                </Text>
                </View>
            </View>

            <TouchableOpacity style={styles.applyButton}>
                <Text styles={styles.applyText}>
                APPLY
                </Text>
            </TouchableOpacity>

            </View>

            <View style={styles.salaryWrapper}>
            <Text style={styles.salaryText}>
                15 LPA - 20 LPA
            </Text>
            </View>
        </View>
        <View style={styles.jobType}>
            <Text style={styles.jobTypeText}>
            In-Office Job
            </Text>
        </View>
    </View>
  );
}
const styles=StyleSheet.create({
    jobContainer:{
        height:137,
        width:287,
        margin:9,
        // backgroundColor:"#000",
      },
      jobType:{
        width:78,
        height:17,
        left:183,
        top:-129,
        backgroundColor:"#F0DAC5",
        borderWidth:1,
        borderColor:"#1C2340",
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        alignItems:"center", 
      },
      jobTypeText:{
        color:"#1C2340",
        textAlignVertical:"center",
        fontSize:10,
      }, 
      job:{
        height:129,
        width:287,
        top:8,
        //
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
      },
      descriptionContainer:{
        // backgroundColor:"#fff",
        flexDirection:"row",
        justifyContent:"space-around",
        width:200,
        height:65,
        // paddingTop:2,
        // paddingLeft:0,
        marginTop:5,
        marginLeft:7,
      },
      jobDescription:{
        height:100,
        backgroundColor:"#1C2340",
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
      },
      imageContainer:{
        alignItems: 'center',
        justifyContent:"center",
        width:50,
        height:50,
        top:5,
        left:0,
        // marginRight:25,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        backgroundColor:"#F0DAC5",
      },
      cgpaText:{
        backgroundColor:"#1C2340",
        fontSize:8,
        width:50,
        alignSelf:"baseline",
        textAlign:"center",
        color:"#F0DAC5",
        top:15,
      },
      companyDetails:{
        flexDirection:"column",
        marginTop:3,
      },
      companyNameText:{
        color:"#F0DAC5",
        fontSize:15,
        fontWeight:"bold",
      },
      jobRoleText:{
        color:"#F0DAC5",
        fontSize:14,
      },
      locationText:{
        color:"#F0DAC5",
        fontSize:10,
      },
      skillContainer:{
        width:213,
        // backgroundColor:"#fff",
        flexDirection:"row",
        marginTop:3.5,
      },
      skill:{
        width:60,
        height:17,
        backgroundColor:"#50223C",
        justifyContent:"center",
        // position:"fixed",
        marginLeft:11,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
      },
      skillText:{
        textAlign:"center",
        color:"#F0DAC5",
        fontSize:10,
        alignContent:"space-around",
      },
      applyButton:{
        width:68,
        height:27,
        left:214,
        top:-51,
        backgroundColor:"#F0DAC5",
        justifyContent:"center",
        paddingLeft:14,
        // paddingTop:-5,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
      },
      applyText:{
        color:"#50223C",
        fontWeight:"bold",
      },
      salaryWrapper:{
        height:29,
        backgroundColor:"#50223C",
        justifyContent:"center",
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
      },
      salaryText:{
        textAlign:"center",
        fontSize:15,
        color:"#F0DAC5",
      },
})