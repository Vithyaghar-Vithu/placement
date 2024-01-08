import React,{ useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, useColorScheme } from 'react-native';
import SignInButton from '../../components/signinButton';

export const AdminLogin = () => {
  // const colorScheme = useColorScheme();
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
                  ADMIN LOGIN
                </Text>
              </View>

              <View style={styles.boxContainer}>

                <View style={styles.inputContainer}>
                  <TextInput
                    placeholder='Username'
                    style={styles.button}
                  />
                  
                  <TextInput
                    placeholder='Password'
                    style={styles.button}
                  />
                    
                </View>
              </View>
            </View>

            <SignInButton/>
            
            <View style={styles.linkContainer}>
                <Text >
                    Not an Admin? 
                </Text>
                <TouchableOpacity>
                    <Text style={styles.link}>
                        Other Options
                    </Text>
                </TouchableOpacity>
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
    paddingTop:164,
   
    justifyContent: 'center',
    // backgroundColor:'#000'
  },
  box:{
    // top:219,
    height:370,
    width:340,
    left:2.5,
    position:'relative',
    // backgroundColor:'#000',
    alignItems:'center',
    justifyContent: 'center',
    padding:10,
  },
  textContainer:{
    alignItems:'center',
    width:153,
    justifyContent: 'center',
    // backgroundColor:'#fff',
    // width:206,
    height:120,
    marginBottom:10,  
    
  },
  textWrapper:{
    fontSize:46,
    textAlignVertical:"center",
    color:'#50223c',
    borderColor:'black',
    textAlign:'center',
  },
  boxContainer:{
    backgroundColor:'#50223c',
    height:196,
    borderRadius:25,
    paddingTop:10,
    paddingRight:20,
  },
  textWrapper1:{
    color:'#F0DAC5',
    marginLeft:25,
  },
  inputContainer:{
    top:-2,
    alignItems:'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor:'#F0DAC5',
    borderRadius:10,
    width:285,
    height:56,
    alignItems:'center',
    justifyContent: 'center',
    marginLeft:20,
    marginTop:23,
    paddingLeft:20,
  },
  signInOpt:{
    backgroundColor:'#50223c',
    borderRadius:10,
    width:285,
    height:56,
    alignItems:'center',
    justifyContent: 'center',
    marginLeft:20,
    marginTop:23,
    paddingLeft:20,
  },
  textWrapper2:{
    color:"#F0DAC5"
  },
  line:{
    fontSize:15,
  },
  linkContainer:{
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Align items vertically
    marginTop:15,
  },
  link:{
    color: '#0076B2',
    marginLeft: 5, // Adjust margin as needed for spacing
    fontSize:15,
  }
});
  
export default AdminLogin;

