import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { Icon,Container } from 'native-base';

export default class Chat extends React.Component {
  state = {
    messages:[],
  };

  componentWillMount(){
    this.setState({
      messages:[
        {
            _id:1,
            text:'Hello',
            createdAt: new Date(),
            user:{
              _id:2,
              name:'React Native',
              avatar:'https://www.freeiconspng.com/uploads/facebook-love-emoji-png-10.png',
            },
        },
      ],
    })
  };

  onSend(messages = []){
    this.setState(previousState =>({
      messages: GiftedChat.append(previousState.messages,messages),
    }))
  }

  render() {
    return (
      <Container style = {{backgroundColor:'rgb(247,247,247)'}}>
        <Container style = {{backgroundColor:'white',marginBottom:40}}>
          <GiftedChat
          bottomOffset = {30}
          loadEarlier={true}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
          _id: 1,
          }}
          />
          </Container>
     </Container>
    );
  }
}
