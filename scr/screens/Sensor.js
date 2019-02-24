import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableHighlight, Text} from 'react-native';

import Menu from '../component/Menu';
import Header from '../component/Header';

export default class Sensor extends Component<Props> {

    constructor(props) {
      super(props)
      this.state = { state: "LIGADO",
                      color: "#248f24",
                      }
    }

    openOfClose = () => {
      if (this.state.state === "LIGADO") {
        this.setState({
          state: this.state.state = "DESLIGADO",
          color: this.state.color = "#cc0000",
        })
      }else {
        this.setState({
          state: this.state.state = "LIGADO",
          color: this.state.color = "#248f24",
        })
      }
    }
    
   render() {

    return (      
      
      <View  style={styles.Body}> 

        <View style={{flex: 1}}>

        <View style={{alignItems: 'center', }}>

        <Header title={title='GERENCIAMENTOR DOS SENSORES'}/>
        <Image source={require('../images/AlarmIcon.png')} style={styles.Image} />
       

        </View>
        <TouchableHighlight
          style={{backgroundColor: this.state.color,  alignItems: 'center', padding: 10,
          margin: 10}}
          onPress={this.openOfClose}
          >
          <Text style={styles.Font}> Sensor de luz: {this.state.state} </Text>
        </TouchableHighlight>         
        <View style={{alignItems: 'center'}}>
        </View>
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