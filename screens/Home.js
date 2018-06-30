import React from 'react';
import{StyleSheet,Text} from 'react-native';
import {Container, Form,Item,Input,Button} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class Home extends React.Component {
  state={
    name: '',
  };
  render() {
    return (
      <Container style = {styles.container}>
        <Text style = {styles.text}>Enter Your Name</Text>
        <Item style = {{marginTop:20,borderColor:'black',width:300}}>
          <Input
          style = {{fontSize:24}}
          placeholder = "John Snow"

          onChangeText = {(text) =>{
            this.setState({
              name:text,
            });
          }}
          />
        </Item>
        <Button block style = {styles.button}
        onPress = {() => {Actions.chat()}}
        >
        <Text style = {{fontSize:24, color:'white'}}>Enter</Text>
        </Button>
        alert(name);
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    flex:1,
    paddingTop:40,
    //justifyContent:'center',
  },
  text:{
    color:'steelblue',
    fontSize:24,
    marginLeft:20,
  },
  button:{
    margin:20,

  },

});
