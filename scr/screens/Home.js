import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableHighlight, Text} from 'react-native';
import Menu from '../component/Menu';
import {Actions} from 'react-native-router-flux';

export default class Home extends Component<Props> {
   
    render() {

    return (      
      <View  style={styles.Body}>            
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
  Menu: {
    padding: 8,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    flexDirection: 'row'
  }
});