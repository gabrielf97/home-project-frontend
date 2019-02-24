import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TextInput, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

export default class Login extends Component<Props> {
   
   render() {

    return (      
      
      <View  style={styles.Body}> 
        <View style={styles.Center}>
          <Image source={require('../images/Logo.png')} style={styles.Logo} />

          <Text style={styles.TextLogo}>     
            Bem vindo ao House Project
          </Text>
        </View>
           
        <View>
          <TextInput style={styles.Input} placeholder="Insira seu usuário"/>
                
          <TextInput style={styles.Input} placeholder="Insira sua senha"/>         
        </View>

        <View style={styles.ButtonPerson}>
          <Button                  
                title="Entrar" 
                color="black"
                onPress={() => Actions.Home()}
          />
        </View>             
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  Body:{
    flex: 1,   
    justifyContent: 'center',
    backgroundColor: "white",
  },
  Center:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextLogo:{
    color: 'black',    
    fontSize:20,
  },
  Logo:{
    width: 80, 
    height: 80,       
  },  
  Input:{
    height: 50,    
    marginRight: 10, 
    marginLeft: 10,
    margin: 5,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'black'
  },
  ButtonPerson:{      
    padding: 5,
  }
});