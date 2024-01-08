import React,{ useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const LandingPage = () => {
  return (
    <View style={styles.openingPage}>
      <View style={styles.group}>
        <View style={styles.overlapGroup}>

          <View style={styles.overlap}>
            <Text style={styles.textWrapper}>STUDENT</Text>
          </View>
          
          <Text   style={styles.div}>Navigate to...</Text>
          <View style={styles.divWrapper}>
            <Text style={styles.textWrapper2}>ADMIN</Text>
          </View>
          <View style={styles.overlap2}>
            <Text style={styles.textWrapper3}>COMPANY</Text>
          </View>
        </View>
        <Text style={styles.textWrapper4}>WELCOME</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    openingPage: {
        // background-image: url(./opening-page.svg),
        // background-position: 50% 50%,
        // background-size: cover,
        // height: 800px,
        // width: 360px,
    },
    group: {
      // Add styles for the group container here
        height: 362,
        left: 25,
        position: 'relative',
        top: 219,
        width: 319,
    },
    overlapGroup: {
      // Add styles for the overlapGroup container here
        backgroundColor: '#50223c',
        borderRadius: 30,
        height: 292,
        left: 0,
        position: 'absolute',
        top: 70,
        width: 309,
    },
    overlap: {
      // Add styles for the overlap container here
        backgroundColor: '#f0dac5',
        borderRadius: 10,
        height: 56,
        left: 25,
        position: 'absolute',
        top: 44,
        width: 258,
    },
    textWrapper: {
      // Add styles for the text-wrapper here
        color: '#1c2340',
        // ////fontfamily: "Monda-Bold",
        fontSize: 20,
        fontWeight: 700,
        left: 82,
        letterSpacing: 0,
        lineHeight: 'normal',
        position: 'absolute',
        top: 12,
    },
    div: {
      // Add styles for the div here
        color: '#f0dac5',
        ////fontfamily: "Monda-Bold",
        fontSize: 15,
        fontWeight: 700,
        left: 25,
        letterSpacing: 0,
        lineHeight: 'normal',
        position: 'absolute',
        top: 10,
    },
    divWrapper: {
        // Add styles for the div-wrapper container here
        backgroundColor: '#f0dac5',
        borderRadius: 10,
        height: 56,
        left: 25,
        position: 'absolute',
        top: 125,
        width: 258,
    },
    textWrapper2: {
      // Add styles for the text-wrapper-2 here
        color: '#1c2340',
        ////fontfamily: "Monda-Bold",
        fontSize: 20,
        fontWeight: 700,
        left: 91,
        letterSpacing: 0,
        lineHeight: 'normal',
        position: 'absolute',
        top: 11,
    },
    overlap2: {
      // Add styles for the overlap-2 container here
        backgroundColor: '#f0dac5',
        borderRadius: 10,
        height: 56,
        left: 25,
        position: 'absolute',
        top: 206,
        width: 258,
    },
    textWrapper3: {
      // Add styles for the text-wrapper-3 here
        color: '#1c2340',
        ////fontfamily: "Monda-Bold",
        fontSize: 20,
        fontWeight: 700,
        left: 77,
        letterSpacing: 0,
        lineHeight: 'normal',
        position: 'absolute',
        top: 11,
    },
    textWrapper4: {
      // Add styles for the text-wrapper-4 here
        color: '#50223c',
        ////fontfamily: "CantoraOne-Regular",
        fontSize: 48,
        fontWeight: 400,
        left: 42,
        letterSpacing: 0,
        lineHeight: 'normal',
        position: 'absolute',
        textAlign: 'center',
        top: 0,
    },
  });
  
  export default LandingPage;