
import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Login from './Login'
import Splash from './Splash'
import NavBar from './NavBar'
import Signup from './Signup'
import Cricket from './Cricket'
import HomeScreen from './pages/HomeScreen'
import Question2 from './cric/Question2'
import Question3 from './cric/Question3'
import Question4 from './cric/Question4'
import Question5 from './cric/Question5'
import FootQue1 from './foot/FootQue1'
import FootQue2 from './foot/FootQue2'
import FootQue3 from './foot/FootQue3'
import FootQue4 from './foot/FootQue4'
import FootQue5 from './foot/FootQue5'
import WrestQue1 from './wrestling/WrestQue1'
import WrestQue2 from './wrestling/WrestQue2'
import WrestQue3 from './wrestling/WrestQue3'
import WrestQue4 from './wrestling/WrestQue4'
import WrestQue5 from './wrestling/WrestQue5'
import FilQue1 from './films/FilQue1'
import FilQue2 from './films/FilQue2'
import FilQue3 from './films/FilQue3'
import FilQue4 from './films/FilQue4'
import FilQue5 from './films/FilQue5'
import WebQue1 from './web/WebQue1'
import WebQue2 from './web/WebQue2'
import WebQue3 from './web/WebQue3'
import WebQue4 from './web/WebQue4'
import WebQue5 from './web/WebQue5'
import PolQue1 from './politics/PolQue1'
import PolQue2 from './politics/PolQue2'
import PolQue3 from './politics/PolQue3'
import PolQue4 from './politics/PolQue4'
import PolQue5 from './politics/PolQue5'
import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack'; 
import { createAppContainer } from 'react-navigation';
const AppStackNavigator = createStackNavigator({ 

  Splash:{
    screen: Splash
  },
   
  Login:{
    screen:Login
  },

  Signup:{
    screen:Signup
  },
  DrewerNav: {
    screen: NavBar
  },
  Cricket: {
    screen: Cricket
  }, 

  HomeScreen:{
    screen: HomeScreen
  },

  Question2:{
    screen: Question2
  },

  Question3:{
    screen: Question3
  },

  Question4:{
    screen: Question4
  },

  Question5:{
    screen: Question5
  },

  FootQue1: {
    screen: FootQue1
  },

  FootQue2: {
    screen: FootQue2
  },

  FootQue3: {
    screen: FootQue3
  },

  FootQue4: {
    screen: FootQue4
  },

  FootQue5: {
    screen: FootQue5
  },

  WrestQue1: {
    screen: WrestQue1
  },

  WrestQue2: {
    screen: WrestQue2
  },

  WrestQue3: {
    screen: WrestQue3
  },

  WrestQue4: {
    screen: WrestQue4
  },

  WrestQue5: {
    screen: WrestQue5
  },

  FilQue1: {
    screen: FilQue1
  },

  FilQue2: {
    screen: FilQue2
  },

  FilQue3: {
    screen: FilQue3
  },

  FilQue4: {
    screen: FilQue4
  },

  FilQue5: {
    screen: FilQue5
  },

  WebQue1: {
    screen: WebQue1
  },

  WebQue2: {
    screen: WebQue2
  },

  WebQue3: {
    screen: WebQue3
  },

  WebQue4: {
    screen: WebQue4
  },

  WebQue5: {
    screen: WebQue5
  },

  PolQue1: {
    screen: PolQue1
  },

  PolQue2: {
    screen: PolQue2
  },

  PolQue3: {
    screen: PolQue3
  },

  PolQue4: {
    screen: PolQue4
  },

  PolQue5: {
    screen: PolQue5
  },

},
    navigationOptions={
      headerMode:'none'
})

const App = createAppContainer(AppStackNavigator);

export default App; 








