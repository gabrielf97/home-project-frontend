import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableHighlight, Text} from 'react-native';
import Menu from '../component/Menu';
import Header from '../component/Header';

export default class Lamps extends Component<Props> {
   
  constructor(props) {
    super(props)
    this.state = { state: "ON", 
                    color: "#248f24"}
  }

  onOrOff = () => {
    if (this.state.state === "ON") {
      this.setState({
        state: this.state.state = "OFF",
        color: this.state.color = "#cc0000"
      })
    }else {
      this.setState({
        state: this.state.state = "ON",
        color: this.state.color = "#248f24"
      })
    }
  }

   render() {

    return (      
      <View  style={styles.Body}> 

        <View style={{flex: 1}}>

        <View style={{alignItems: 'center', }}>

        <Header title={title='GERENCIAMENTOR DE LAMPADAS'}/>
        <Image source={require('../images/LampIcon.png')} style={styles.Image} />

        </View>

        <TouchableHighlight
          style={{backgroundColor: this.state.color,  alignItems: 'center', padding: 10,
          margin: 10}} 
          onPress={this.onOrOff}
          >
          <Text style={styles.Font}> Sala: {this.state.state} </Text>
        </TouchableHighlight>   

        <TouchableHighlight
          style={{backgroundColor: this.state.color,  alignItems: 'center', padding: 10,
          margin: 10}}
          onPress={this.onOrOff}
          >
          <Text style={styles.Font}> Banheiro: {this.state.state} </Text>
        </TouchableHighlight> 

        <TouchableHighlight
          style={{backgroundColor: this.state.color,  alignItems: 'center', padding: 10,
          margin: 10}}
          onPress={this.onOrOff}
          >
          <Text style={styles.Font}> Quarto: {this.state.state} </Text>
        </TouchableHighlight>       
    
        <TouchableHighlight
          style={{backgroundColor: this.state.color,  alignItems: 'center', padding: 10,
          margin: 10}}
          onPress={this.onOrOff}
          >
         <Text style={styles.Font}> Cozinha: {this.state.state} </Text>
        </TouchableHighlight> 

        <TouchableHighlight
          style={{backgroundColor: this.state.color,  alignItems: 'center', padding: 10,
          margin: 10}}
          onPress={this.onOrOff}
          >
          <Text style={styles.Font}> Todos os contextos: {this.state.state} </Text>
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
  Title:{
    margin: 10, 
    fontSize: 20,
     color: 'black', 
     fontWeight: 'bold'
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