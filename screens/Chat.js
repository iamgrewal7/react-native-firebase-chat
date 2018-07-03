import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { Icon,Container } from 'native-base';
import Backend from '../Backend';

export default class Chat extends React.Component {
  state = {
    messages:[],
  };
render() {
    return (
      <Container style = {{backgroundColor:'rgb(247,247,247)'}}>
        <Container style = {{backgroundColor:'white',marginBottom:40}}>
          <GiftedChat
          bottomOffset = {30}
          loadEarlier={true}
          messages={this.state.messages}
          onSend={(message) => {
            Backend.sendMessage(message)
          }}
          user={{
          _id: Backend.getUid(),
          name: this.props.name,
          }}
          />
          </Container>
     </Container>
    );
  }
  componentDidMount(){
    Backend.loadMessages((message)=>{
      this.setState((previousState) =>{
        return{
          messages:GiftedChat.append(previousState.messages,message)
        };
      });
    });
  }
  componentWillMount(){
    Backend.closeChat();
  }
}
