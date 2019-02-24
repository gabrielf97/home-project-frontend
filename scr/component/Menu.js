import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableHighlight, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Menu extends Component<Props> {
    
   render() {

    return (            
        <View style={styles.Menu}>         
          <TouchableHighlight onPress={() => Actions.Home()}>
            <Image source={require('../images/HomeIcon.png')} style={{width: 30, height:30, marginLeft: 25}} />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => Actions.Lamp()}>
            <Image source={require('../images/LampIcon.png')} style={{width: 30, height: 30, marginLeft: 22}} />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => Actions.Garage()}>
            <Image source={require('../images/GarageIcon.png')} style={{width: 30, height: 30, marginLeft: 25}} />
          </TouchableHighlight>
      
          <TouchableHighlight onPress={() => Actions.Fan()}>
            <Image source={require('../images/FanIcon.png')} style={{width: 30, height:30, marginLeft: 25}} />
          </TouchableHighlight>
      
          <TouchableHighlight onPress={() => Actions.Alarm()}>
            <Image source={require('../images/AlarmIcon.png')} style={{width: 30, height:30, marginLeft: 25}} />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => Actions.Sensor()}>
            <Image source={require('../images/SensoIcon.png')} style={{width: 30, height:30, marginLeft: 25}} />
          </TouchableHighlight>
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10
  },
  Menu: {
    padding: 8,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    flexDirection: 'row'
  }
});