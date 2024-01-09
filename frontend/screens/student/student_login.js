import React,{ useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, useColorScheme } from 'react-native';
import SignInButton from '../../components/signinButton';
import { useNavigation } from '@react-navigation/native';

export const StudentLogin = () => {
  // const colorScheme = useColorScheme();
  const [page,setPage] = useState();
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
                  STUDENT LOGIN
                </Text>
              </View>

              <View style={styles.boxContainer}>

                <View style={styles.inputContainer}>
                  <TextInput
                    placeholder='Roll number'
                    style={styles.button}
                  />
                  
                  <TextInput
                    placeholder='Birthday'
                    style={styles.button}
                  />
                    
                </View>
              </View>
            </View>
            
            <TouchableOpacity 
              style={styles.signinContainer}
              onPressIn={() => { setPage("Dashboard"); console.log('dashboard'); }}
              onPress={() => {navigation.navigate('DashboardPage')}}  
            >
              <Text style={styles.signinText}> 
                  Sign In
              </Text>
            </TouchableOpacity>
            
            <Text style={styles.line}>
            __________________   or   __________________
            </Text> 

            <TouchableHighlight style={styles.signInOpt}/*onPress={onPress}*/>
              <Text style={styles.textWrapper2}>
                  Sign in with LinkedIn
              </Text>
            </TouchableHighlight>
            <View style={styles.linkContainer}>
                <Text >
                    Not a Student? 
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
    paddingTop:120,
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
    justifyContent: 'center',
    padding:10,
  },
  textContainer:{
    alignItems:'center',
    
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
    marginTop:23,
    marginBottom:10,
    paddingLeft:20,
  },
  textWrapper2:{
    color:"#F0DAC5"
  },
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
},
  line:{
    fontSize:15,
    // justifyContent:"center",
    alignItems:'center',
  },
  linkContainer:{
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Align items vertically
  },
  link:{
    color: '#0076B2',
    marginLeft: 5, // Adjust margin as needed for spacing
    fontSize:15,
  }
});
  
export default StudentLogin;

