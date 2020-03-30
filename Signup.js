import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Image,
  Button
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  COLOR_PINK, COLOR_PINK_LIGHT, 
  COLOR_FACEBOOK, COLOR_PINK_MEDIUM} 
from './myColors'
export default class Signup extends Component {
  //static navigationOptions = {
   // header: null,    
  //}
  render() {
    
    return (
      //Donot dismis Keyboard when click outside of TextInput
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.up}>
            <Image  style={{width:150, height: 150}}
                source={require('./images/Cropimg.png')}/>
            <Text style={styles.title}>
              WELCOME !
          </Text>
          </View>
          <View style={styles.down}>
             <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Enter your Name"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Enter your Contact number"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              /> 
                 <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Enter your Email"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              /> 
                 <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Enter your Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              /> 

            <TouchableOpacity style={styles.button } onPress={() => this.props.navigation.navigate('DrewerNav')}>
             <Text style={styles.buttonText}>SIGN UP</Text>
           </TouchableOpacity> 
          </View>
         <View style={styles.signupTextCont}>
		<Text style={styles.signupText}>Already have an account?</Text>
		<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
				</View>
        </View>
      </TouchableWithoutFeedback>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',  
    backgroundColor: '#455a64',
  },
  up: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    paddingBottom: 50
  },
  down: {
    flex: 7,//70% of column
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  title: {
    color: 'white',
    textAlign: 'center',
    width: 400,
    fontSize: 23,
    fontWeight: 'bold',
  },
  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
   background:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7,
        color: COLOR_PINK,
   },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
   signupTextCont : {
    flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
    color:'rgba(255,255,255,0.6)',
    fontSize:16
  },
  signupButton: {
    color:'#ffffff',
    fontSize:16,
    fontWeight:'500'
  },
})