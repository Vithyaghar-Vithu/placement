import React,{ useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, useColorScheme } from 'react-native';
import Jobs from '../../components/Job';
import Header from '../../components/header';

export const JobsPage = (/*{ route , navigation }*/) => {
  // const colorScheme = useColorScheme();
  return (
    
      <View style={styles.openingPage}>
        <ImageBackground source={require('../../assets/bg.png')} resizeMode='repeat' imageStyle= {{opacity:0.1}}>
          <View style={styles.container}>
              <View style={styles.innerContainer}>


                  <View style={styles.searchContainer}>
                    <View style={styles.searchWrapper}>
                      <View style={styles.search}>
                        <View style={styles.iconWrapper}>

                        </View>
                        <TextInput 
                        style={styles.searchText} 
                        placeholder='Search using Skills, Name and location'
                        placeholderTextColor="#F0DAC5"
                        />
                      </View>
                    </View>
                    <View style={styles.resultContainer}>
                      <Text style={styles.result}>
                        1000 results shown
                      </Text>
                    </View>
                  </View>

                  <View style={styles.displayContainer}>
                      <Jobs/>
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
  searchContainer:{
    // backgroundColor:"#fff",
    flexDirection:"row", 
    alignItems:"center",
    justifyContent:"center",
    left:5,
  },
  searchWrapper:{
    height:40,
    width:283,
    backgroundColor:"#50223C",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  search:{
    flexDirection:"row", 
    alignItems:"center",
    position:'relative',
    margin:7.25,
  },
  iconWrapper:{
    height:25,
    width:25,
    backgroundColor:"#fff",
    marginRight:6,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  searchText:{
    color:"#F0DAC5",
    fontSize:13,
  },
  resultContainer:{
    width:70,
    marginLeft:7,
    marginRight:7,
  },
  result:{
    fontSize:12,
    color:"#50223C",
  },
  displayContainer:{
    margin:5,
    height:628,
    // backgroundColor:"#fff",
    flexDirection:"column",
  },
  navigationContainer:{
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Align items vertically
    justifyContent:"center",
    position: 'relative',
    bottom: 0,
  },
  navigation:{
    width:"100%",
    height:66,
    backgroundColor:"#50223C",
    flexDirection: 'row',
    justifyContent:"space-evenly",
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
  },
});
  
export default JobsPage;

