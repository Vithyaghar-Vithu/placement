// import React,{ useState } from 'react';
// import {StyleSheet,Text, TouchableOpacity, View, Surface } from 'react-native';



// export const Header=({
//   // const colorScheme = useColorScheme();
  
//   // style,
// 	// menu,
// 	// onPressMenu,
// 	// back,
// 	// onPressBack,
// 	// title,
// 	// right,
// 	// rightComponent,
// 	// onRightPress,
// 	// optionalBtn,
// 	// optionalBtnPress,
// 	// headerBg = "#50223C",
// 	// iconColor = 'black',
// 	// titleAlight,
// 	// optionalBadge
//   // }) => {

//   // const LeftView = () => (
// 	// 	<View style={styles.view}>
// 	// 		{menu && <TouchableOpacity onPress={onPressMenu}>
// 	// 			<Feather name="menu" size={IconSize} color={iconColor} />
// 	// 		</TouchableOpacity>}
// 	// 		{back && <TouchableOpacity onPress={onPressBack}>
// 	// 			<Feather name="arrow-left" size={IconSize} color={iconColor} />
// 	// 		</TouchableOpacity>}
// 	// 	</View>
// 	// )
  
//   // const TitleView = () => (
// 	// 	<View style={styles.titleView}>
// 	// 		<Title style={{ color: iconColor, textAlign: titleAlight }}>{title}</Title>
// 	// 	</View>
// 	// )

//   // const RightView = () => (
// 	// 	rightComponent ? rightComponent :
// 	// 		<View style={[styles.view, styles.rightView]}>
// 	// 			{optionalBtn && <TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
// 	// 				<Feather name={optionalBtn} size={IconSize} color={iconColor} />
// 	// 				{optionalBadge && <Badge style={{ position: 'absolute', top: -5, right: -10 }}>{optionalBadge}</Badge>}
// 	// 			</TouchableOpacity>}
// 	// 			{right !== '' && <TouchableOpacity onPress={onRightPress}>
// 	// 				<Feather name={right} size={IconSize} color={iconColor} />
// 	// 			</TouchableOpacity>}
// 	// 		</View>
// 	// )

//   return (
//     <View style={styles.topBar}>
//         <View style={styles.iconContainer}>

//         </View>
//         <View style={styles.textContainer}>
//             <Text style={styles.textWrapper}>
//                 JOBS FOR YOU
//             </Text>
//         </View>

//         <View style={styles.iconContainer}>

//         </View>
//     </View>

// //     <Surface>
// //       <LeftView />
// // 			<TitleView />
// // 			<RightView />
// //     </Surface>
// //   );
// // }
// const styles=StyleSheet.create({

//   header: {
// 		height: 50,
// 		elevation: 4,
// 		justifyContent: 'space-between',
// 		alignItems: 'center',
// 		flexDirection: 'row',
// 	},
// 	view: {
// 		marginHorizontal: 16,
// 		alignItems: 'center',
// 		flexDirection: 'row',
// 	},
// 	titleView: {
// 		flex: 1,
// 	},
// 	rightView: {
// 		justifyContent: 'flex-end',
// 	},
// 	rowView: {
// 		flexDirection: 'row',
// 		alignItems: 'center',
// 		marginRight: 10,
// 	}
//     // topBar:{
//     //     // flexDirection: 'row',
//     //     alignItems: 'center',
//     //     width:"100%",
//     //     height:80,
//     //     // backgroundColor:"#000",
//     //     color:"#fff",
//     //     verticalAlign:"middle",
//     //     justifyContent:"center",
//     //     // padding:40,
//     //   },
//     //   iconContainer:{
        
//     //   },
//     //   textContainer:{
//     //     height:31,
//     //     width:200,
//     //     alignItems: 'center',
//     //     verticalAlign:"middle",
//     //     top:15,
//     //     // backgroundColor:"blue"
//     //   },
//     //   textWrapper:{
//     //     color:"#1C2340",
//     //     fontSize:25,
//     //     fontWeight:"bold",
//     //   },
// })


import React,{ useState } from 'react';
import {ImageBackground, StyleSheet,Text, TouchableOpacity, View } from 'react-native';

export default function Header(){
  // const colorScheme = useColorScheme();
  return (
    <ImageBackground source={require('../assets/bg.png')} resizeMode='repeat' imageStyle= {{opacity:0.1}}>
      <View style={styles.topBar}>
          <View style={styles.iconContainer}>

          </View>
          <View style={styles.textContainer}>
              <Text style={styles.textWrapper}>
                  JOBS FOR YOU
              </Text>
          </View>

          <View style={styles.iconContainer}>

          </View>
      </View>
    </ImageBackground>
  );
}
const styles=StyleSheet.create({
    topBar:{
        // flexDirection: 'row',
        alignItems: 'center',
        width:"100%",
        height:80,
        // backgroundColor:'#F0DAC5',
        // opacity:0.5,
        // color:"#fff",
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
        color:"#1C2340",
        fontSize:25,
        fontWeight:"bold",
      },
})