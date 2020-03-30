/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import ShareScreen from './pages/ShareScreen';
//import Login from './Login';
const {width} = Dimensions.get('window')
class NavBar extends React.Component {
  render(){
    return (
     <AppDrawerNavigator />

    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1}}>
  <View style={{height:150, backgroundColor:'white', alignItems: 'center', justifyContent: 'center'}}>
  <Image source={require('./pages/unnamed.png')} style={{height: 100, width: 50, borderRadius: 100}}/>
  </View>
  <ScrollView>
  <DrawerItems {...props} /> 
  
  </ScrollView>
  </SafeAreaView>


  )

const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  Share: ShareScreen,
},{
  contentComponent: CustomDrawerComponent,
  drawerWidth: width,
  contentOptions: {
    activeTintColor: 'orange'

  }
});


export default createAppContainer(AppDrawerNavigator);

const styles=StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent:'center',
  },
});



