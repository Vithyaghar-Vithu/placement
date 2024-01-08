import React,{ useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, useColorScheme } from 'react-native';
import Header from '../../components/header';
import ProfileComponent from '../../components/profileComponent';

export const Profile = () => {
  // const colorScheme = useColorScheme();
  return (
    <View style={styles.openingPage}>
      <ImageBackground source={require('../../assets/bg.png')} resizeMode='repeat' imageStyle= {{opacity:0.1}}>

        <View style={styles.container}>
            <View style={styles.innerContainer}>
              {/* <Header/> */}
                <View style={styles.upperBox}>
                    <View style={styles.topBar}>
                        <View style={styles.iconContainer}>

                        </View>

                        <View style={styles.textContainer}>
                            <Text style={styles.textWrapper}>
                                YOUR PROFILE
                            </Text>
                        </View>

                        <View style={styles.iconContainer}>

                        </View>


                    </View>
                        

                    <View style={styles.profileContainer}>
                      <View style={styles.profile}>
                        <View style={styles.imageContainer}>
                          <View style={styles.image}>
                            
                            <Text style={styles.cgpaText}>
                              8CGPA
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>

                    <View style={styles.nameContainer}>
                      <Text style={styles.name}>
                        Firstname Lastname
                      </Text>
                      <TouchableOpacity style={styles.linkContainer}>
                        <View style={styles.iconContainer2}>

                        </View>
                        <Text style={styles.link}>
                          LinkedIn link
                        </Text>
                      </TouchableOpacity>
                    </View>

                </View>


                <View style={styles.lowerBox}>
                  <View style={styles.lowerBoxContainer}>
                    <ProfileComponent/>
                    <ProfileComponent/>
                    <ProfileComponent/>
                    <ProfileComponent/>
                    <ProfileComponent/>
                    <ProfileComponent/>
                    <ProfileComponent/>
                  </View>
                </View>
            </View>


            <View style={styles.navigationContainer}>
                <View style={styles.navigation}>
                  
                </View>
            </View>
        </View>

      </ImageBackground>
    </View>
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
  upperBox:{
    position:"relative",
    width:"100%",
    height:382,
    borderBottomLeftRadius: 50, 
    borderBottomRightRadius: 50,
    backgroundColor:"#1C2340"
  },
  topBar:{
    // flexDirection: 'row',
    alignItems: 'center',
    width:"100%",
    height:80,
    // backgroundColor:"#000",
    color:"#fff",
    verticalAlign:"middle",
    justifyContent:"center",
    // padding:40,

  },
  iconContainer:{
    
  },
  textContainer:{
    height:31,
    width:200,
    alignItems: 'center',
    verticalAlign:"middle",
    top:15,
    // backgroundColor:"blue"
  },
  textWrapper:{
    color:"#F0DAC5",
    fontSize:25,
  },
  profileContainer:{
    alignItems: 'center',
    overflow:"scroll",
  },
  profile:{
    margin:10,
    borderColor:"#f0dac5",
    borderWidth:2,
    height:150,
    width:150,
    borderBottomLeftRadius:85,
    borderBottomRightRadius:85,
    borderTopLeftRadius:85,
    borderTopRightRadius:85,
  },
  imageContainer:{
    alignItems: 'center',
    justifyContent:"center",
    padding:7,
  },
  image:{
    height:130,
    width:130,
    backgroundColor:"#f0dac5",
    borderBottomLeftRadius:85,
    borderBottomRightRadius:85,
    borderTopLeftRadius:85,
    borderTopRightRadius:85,
    justifyContent:"center",
    alignItems:"center",
  },
  cgpaText:{
    backgroundColor:"#1C2340",
    fontSize:20,
    width:200,
    alignSelf:"baseline",
    textAlign:"center",
    color:"#F0DAC5",
    top:30,
    // borderWidth:2,
    left:-35,
  },
  nameContainer:{
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent:"center",
    margin:15,
  },
  name:{ 
    color:"#F0DAC5",
    textAlign:"center",
    fontWeight:"bold",
    fontSize:20,
    height:33,
    width:195,
  },
  linkContainer:{
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Align items vertically
    justifyContent:"center",
  },
  link:{
    color: '#F0DAC5',
    marginLeft: 5, // Adjust margin as needed for spacing
    fontSize:15.5,
  },
  lowerBox:{
    width:265,
    height:400,
    top:-50,
    backgroundColor:"#50223C",
    borderColor:"#F0DAC5",
    borderWidth:2,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    justifyContent:"center",
    alignItems:"center",
  },
  lowerBoxContainer:{
    width:250,
    height:360,
    // backgroundColor:"#fff",
    flexDirection:"column",
    justifyContent:"space-evenly"
  },
  iconContainer2:{
    height:36,
    width:36,
    backgroundColor:"#000",
    marginLeft:10,
    marginTop:5,
  },
  navigationContainer:{
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Align items vertically
    justifyContent:"center",
  },
  navigation:{
    width:"100%",
    height:66,
    top:-15,
    backgroundColor:"#50223C",
    flexDirection: 'row',
    justifyContent:"space-evenly",
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
  },
});
  
export default Profile;

