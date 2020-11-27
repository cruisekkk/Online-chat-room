import React, { Component } from "react";
import Loading from "../components/Loading";
import ChatBox from "./Chat_Box";
import io, { Socket } from "socket.io-client";
import style from "./Room.css"
class Room extends Component{
  constructor(props) {
    super(props);
    this.state = {
      ws: null,
      messages: [],
    }
  }

  componentDidMount() {
    let ws = io('http://localhost:8000');
    this.setState({ws}, () => {
      this.state.ws.on('chat message', (msg) => {
        console.log(msg);
        this.setState({messages: this.state.messages.concat([msg])});
        console.log("receive chat message");
      })
    });
    console.log("invoked");
  }
  shouldComponentUpdate(nextProps, nextState){
    return true;
  }
  componentDidUpdate(nextProps, nextState) {
    
  }
  sendMessage(message){
    this.state.ws.emit('chat message', message);
  }
  render(){
    return(
      <div className={style.Room}>
        <Loading/>
        <ChatBox onSend={this.sendMessage.bind(this)} messages={this.state.messages}/>
      </div>
    );
  }
}

export default Room;