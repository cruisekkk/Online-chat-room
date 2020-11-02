import React, { Component } from "react";
import "./Room.css";

class ChatBox extends Component{
  constructor(props) {
    super(props);
    this.state = {
      inputValue : '',
    }
    this.inputRef = React.createRef();
  }

  emitMessage(e) {
    e.preventDefault();
    // console.log(e.target);
    console.log(this.state.inputValue);
    this.props.onSend(this.state.inputValue);
    this.setState({inputValue: ''});
    //console.log(this.inputRef);
    this.inputRef.current.value = '';
  }
  bindValue(e){
    this.setState({inputValue: e.target.value});
    //console.log(this.props.messages);
  }
  render(){
    return(
      <div className="ChatBox">
        <ul id="messages">
          {this.props.messages.map((item) => {
            return (<li>{item}</li>)
          })}
        </ul>
        <form action="" onSubmit={(e) => this.emitMessage(e)}>
          <input id="m" ref={this.inputRef}onChange={(e) => this.bindValue(e)}/><button>Send</button>
        </form>
      </div>
    );
  }
}

export default ChatBox;