import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import {CheckBox, Header, Icon, Left, Body, Right, Title} from "native-base";

export default class WebQue5 extends React.Component {
  state={
    selectedLang:0
  }
  render(){
    return (
    <View style={styles.container}>
    <View style={styles.containerHead}>
    <Header style={{justifyContent: 'flex-start', paddingRight: 7, backgroundColor: '#add8e6' }}>
      <Left >
      <Icon name="md-arrow-round-back" onPress={()=>this.props.navigation.navigate('WebQue4')}/>
      </Left>
      <Body>
            <Title style={{color: 'black', justifyContent:'center',paddingLeft: 51, fontWeight: 'bold'}}>FILMS</Title>
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
    </View>

      <View style={styles.num}>
      <Text style={styles.header}>Question 5:</Text>
      </View>

      <View style={styles.ques}>
      <Text style={styles.design}>In which series 'Kay Kay Menon' played role as an R&AW agent ?</Text>
      </View>
    
        <View style={styles.item1} >
            <CheckBox checked={this.state.selectedLang===1} color="#fc5185" onPress={()=>this.setState({selectedLang:1})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang===1?"#fc5185":"gray",
                fontWeight:this.state.selectedLang===1? "bold" :"normal"
              }}
              >MONEY HEIST</Text>
        </View>
        <View style={styles.item2}>
            <CheckBox checked={this.state.selectedLang===2} color="#fc5185" onPress={()=>this.setState({selectedLang:2})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang===2?"#fc5185":"gray",
                fontWeight:this.state.selectedLang===2? "bold" :"normal"
              }}
              >SACRED GAMES</Text>
        </View>
        <View style={styles.item3}>
            <CheckBox checked={this.state.selectedLang===3} color="#fc5185" onPress={()=>this.setState({selectedLang:3})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang===3?"#fc5185":"gray",
                fontWeight:this.state.selectedLang===3? "bold" :"normal"
              }}
              >SPECIAL OPS</Text>
        </View>

     <View style={styles.containerSub}>
     <TouchableOpacity style={styles.submit}>
      <Text style={{color:"white"}}>SUBMIT</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.containerNext} >
     <TouchableOpacity style={styles.submit}>
      <Text style={{color:"white"}}>RESULT</Text>
      </TouchableOpacity>
      </View>
       
        </View>
    );
  }
  
}

const styles = StyleSheet.create({
container: {
    flex: 1,

  },
  num:{
    paddingBottom: 20
  },
  ques:{
    paddingBottom:20,
  },

  header:{
    fontSize:25,
    fontWeight:"bold",
    color:"#364f6b",
    paddingBottom: 10,
    paddingTop:20,
    paddingLeft: 15,
  },
  design:{
    fontSize:25,
    fontWeight:"bold",
    color:"#364f6b",
    paddingLeft: 15,
  },
   
  item1:{
    width:"90%",
    borderRadius:30,
    padding:10,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
    flexDirection:"row",
  },
   item2:{
    width:"90%",
    borderRadius:30,
    padding:10,
    marginBottom: 10,
    marginLeft: 20,
    flexDirection:"row",
  },
   item3:{
    width:"90%",
    borderRadius:30,
    padding:10,
    marginBottom: 10,
    marginLeft: 20,
    flexDirection:"row",
  },
  checkBoxTxt:{
    marginLeft:20
  },
  containerSub:{
    width:"70%",
    backgroundColor:"#fc5185",
    borderRadius:20,
    padding:10,
    marginTop: 40,
    marginLeft: 50,
    alignItems:"center",
    justifyContent:'center',
  },
    containerNext:{
    width:"70%",
    backgroundColor:"#fc5185",
    borderRadius:20,
    padding:10,
    marginTop: 20,
    marginLeft: 50,
    alignItems:"center",
    justifyContent:'center',
  },

  
});