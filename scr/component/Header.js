import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Herder = (props) => {

    return (        
      <View>    
        <Text style={styles.Title}>{props.title}</Text>
      </View>     
    );  
}

const styles = StyleSheet.create({
  Title:{
    margin: 10, 
    fontSize: 20,
     color: 'black', 
     fontWeight: 'bold'
  } 
});
export default Herder;