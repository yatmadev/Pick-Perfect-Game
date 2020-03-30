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
  Animated,
  Image,
  Easing,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import {Header, Left, Body, Right, Icon, Title} from 'native-base';
import Cricket from '../Cricket';
import FootQue1 from '../foot/FootQue1'
import WrestQue1 from '../wrestling/WrestQue1'
import FilQue1 from '../films/FilQue1'
import WebQue1 from '../web/WebQue1'
import PolQue1 from '../politics/PolQue1'
export default class HomeScreen extends React.Component {
	
	static navigationOptions={
		    headerShown: false,
		drawerIcon : ({tintColor}) =>(
			<Icon name= "home" style={{fontSize: 24, color: tintColor}} />

	  )
	}
  render(){
  
    return (
      <View style={styles.container}>
      <Header style={{justifyContent: 'flex-start', paddingRight: 7, backgroundColor: '#add8e6' }}>
      <Left >
      <Icon name="ios-menu" onPress={()=>this.props.navigation.openDrawer()}/>
      </Left>
      <Body>
            <Title style={{color: 'black', justifyContent:'center',paddingLeft: 54, fontWeight: 'bold'}}>Dashboard</Title>
          </Body>
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
      <View style={{ flex: 1, paddingTop: 30 }}>
                            <Text style={{ fontSize: 22, fontWeight: '700', paddingHorizontal: 132,color: 'black' }}>
                                SPORTS ! 
                            </Text>

                            <View style={{flex: 1, height: 190, marginTop: 25, paddingLeft: 5 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}>

                                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Cricket')}>
                                   <Image source={require('../images/cricket.png')}/>
                                    <Text style={{ fontSize: 24, fontWeight: 'bold', paddingHorizontal: 29,color: 'black' }}>
                                      CRICKET
                                    </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('FootQue1')}>
                                    <Image source={require('../images/football.png')}
                                        name="Football"/>
                                        <Text style={{ fontSize: 22, fontWeight: '700', paddingHorizontal: 24,color: 'black' }}>
                                      FOOTBALL
                                    </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('WrestQue1')}>
                                    <Image source={require('../images/wrestling.png')}
                                        name="Wrestling"/>
                                        <Text style={{ fontSize: 22, fontWeight: '700', paddingHorizontal: 17,color: 'black'}}>
                                      WRESTLING
                                    </Text>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                            </View>
                            <View style={{ flex: 1, paddingBottom: 30 }}>
                            <Text style={{ fontSize: 22, fontWeight: '700', paddingHorizontal: 85,color: 'black' }}>
                                ENTERTAINMENT ! 
                            </Text>

                            <View style={{flex: 1, height: 190, marginTop: 25, paddingLeft: 5 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}>

                                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('FilQue1')}>
                                   <Image source={require('../images/films.png')}/>
                                    <Text style={{ fontSize: 24, fontWeight: 'bold', paddingHorizontal: 43,color: 'black' }}>
                                      FILMS
                                    </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('WebQue1')}>
                                    <Image source={require('../images/series.png')}
                                        />
                                        <Text style={{ fontSize: 22, fontWeight: '700', paddingHorizontal: 16,color: 'black' }}>
                                      WEB SERIES
                                    </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('PolQue1')}>
                                    <Image source={require('../images/politics.png')}
                                        />
                                        <Text style={{ fontSize: 22, fontWeight: '700', paddingHorizontal: 17,color: 'black'}}>
                                      POLITICS
                                    </Text>
                                    </TouchableOpacity>
                                    
                                </ScrollView>
                            </View>
      </View>
      </View>



    );
  }
}



const styles=StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'pink',
  },

  
});
