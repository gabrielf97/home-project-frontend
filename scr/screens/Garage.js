import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableHighlight, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Menu from '../component/Menu';
import Header from '../component/Header';

export default class Garage extends Component<Props> {

    constructor(props) {
      super(props)
      this.state = { state: "ABERTO",
                      color: "#248f24"}
    }

    openOfClose = () => {
      if (this.state.state === "ABERTO") {
        this.setState({
          state: this.state.state = "FECHADO",
          color: this.state.color = "#cc0000"
        })
      }else {
        this.setState({
          state: this.state.state = "ABERTO",
          color: this.state.color = "#248f24"
        })
      }
    }
    
   render() {

    return (      
      
      <View  style={styles.Body}> 

        <View style={{flex: 1}}>

        <View style={{alignItems: 'center', }}>

        <Header title={title='GERENCIAMENTOR DA GARAGEM'}/>
        <Image source={require('../images/GarageIcon.png')} style={styles.Image} />

        </View>
        <TouchableHighlight
          style={{backgroundColor: this.state.color,  alignItems: 'center', padding: 10,
          margin: 10}}
          onPress={this.openOfClose}
          >
          <Text style={styles.Font}> PORTÃO: {this.state.state} </Text>
        </TouchableHighlight>          
        </View>       
          <Menu></Menu>
        </View>               
    );
  }
}

const styles = StyleSheet.create({
  Body:{
    flex: 1,   
    justifyContent: 'flex-end',
    backgroundColor: "white",
  },
  Button: {
    alignItems: 'center',
    padding: 10,
    margin: 10
  }, 
  Image:{
    width: 50,
    height: 50, 
    margin: 15
  },
  Font:
  {
    fontSize: 15,
    color: 'black', 
    fontWeight: 'bold'
  }
});