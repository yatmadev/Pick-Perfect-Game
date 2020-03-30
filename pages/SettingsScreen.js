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
  Alert,
  AsyncStorage
} from 'react-native';
import {Header, Left, Right, Icon} from 'native-base';
import Login from '../Login';
export default class SettingsScreen extends React.Component {
	static navigationOptions={
		drawerIcon : ({tintColor}) =>(
			<Icon name= "settings" style={{fontSize: 24, color: tintColor}} />

	  )
	}
  render(){
    return (
      <View style={styles.container}>
      <Header style={{justifyContent: 'flex-start', paddingRight: 5, backgroundColor: 'transparent' }}>
      <Left style>
      <Icon name="ios-menu" onPress={()=>this.props.navigation.openDrawer()}/>
      </Left>
      <Right>
        <Icon name="log-out" onPress={()=>
              Alert.alert(
                'Log out',
                'Do you want to logout?',
                [
                  {text: 'Cancel', onPress: () => {return null}},
                  {text: 'Confirm', onPress: () => {
                    AsyncStorage.clear();
                    this.props.navigation.navigate('Login')
                  }},
                ],
                { cancelable: false }
              )  
            }>
            </Icon>
      </Right>
      </Header>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Settings Screen </Text>
      </View>
      </View>

    );
  }
}



const styles=StyleSheet.create({
  container: {
    flex:1,
  },
});
