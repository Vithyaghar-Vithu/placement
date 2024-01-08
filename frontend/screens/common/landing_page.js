import React,{ useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';
// import { TouchableOpacity } from 'react-native-web';
import { useNavigation } from "@react-navigation/native";
import AdminLogin from '../admin/admin_login';

export const LandingPage = () => {
  // const colorScheme = useColorScheme();
  const [user,setUser] = useState();
  const navigation = useNavigation();
  
  return (
    <View style={styles.openingPage}>
      {/* <ImageBackground> */}
      <ImageBackground source={require('../../assets/bg.png')} resizeMode='repeat' imageStyle= {{opacity:0.1}}>

      {/* <Text>useColorScheme(): {colorScheme}</Text> */}

        <View style={styles.container}>

          <View style={styles.innerContainer}>
            <View style={styles.box}>
              <View style={styles.textContainer}>
                <Text style={styles.textWrapper}>
                  WELCOME
                </Text>
              </View>

              <View style={styles.boxContainer}>

                <View style={styles.textContainer1}>
                  <Text style={styles.textWrapper1}>
                    Navigate to...
                  </Text>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity 
                    style={styles.button} 
                    onPressIn={() => {setUser("Student"); console.log(user);}}
                    onPress={() => {navigation.navigate('StudentLogin')}}
                  >
                      <Text style={styles.textWrapper2}>
                        STUDENT
                      </Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                    style={styles.button} 
                    onPressIn={() => { setUser("Admin"); console.log(user); }}
                    onPress={() => {navigation.navigate('AdminLogin')}}
                  >
                      <Text style={styles.textWrapper2}>
                        ADMIN
                      </Text>
                  </TouchableOpacity>
                  
                </View>
              </View>
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
    paddingTop:219,
   
    justifyContent: 'center',
    // backgroundColor:'#000'
  },
  box:{
    // top:219,
    height:370,
    width:340,
    left:9,
    position:'relative',
    // backgroundColor:'#000',
    justifyContent: 'center',
    padding:10,
  },
  textContainer:{
    alignItems:'center',
    justifyContent: 'center',
    // backgroundColor:'#fff',
    height:60,
    marginBottom:10,  
    // top:-110,
    
  },
  textWrapper:{
    fontSize:46,
    textAlignVertical:"center",
    color:'#50223c',
    borderColor:'black',
  },
  boxContainer:{
    backgroundColor:'#50223c',
    height:200,
    borderRadius:25,
    paddingTop:10,
    // paddingLeft:20,
    paddingRight:20,
  },
  textWrapper1:{
    color:'#F0DAC5',
    marginLeft:25,
  },
  buttonContainer:{
    top:-15,
  },
  button:{
    backgroundColor:'#F0DAC5',
    borderRadius:10,
    height:56,
    alignItems:'center',
    justifyContent: 'center',
    marginLeft:20,
    marginTop:23,
  },

});
  
export default LandingPage;

