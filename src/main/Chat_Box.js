import React, { Component, useEffect, useState } from "react";
import styles from "./Room.css";
import {useAuth} from "../App"

function ChatBox (props){
  const [inputValue, setInputValue] = useState("");

  const inputRef = React.createRef();
  const auth = useAuth();

  const emitMessage = (e) => {
    e.preventDefault();
    // console.log(e.target);
    console.log(inputValue);
    props.onSend(inputValue);
    setInputValue("");
    //console.log(this.inputRef);
    inputRef.current.value = '';
  }
  const bindValue = (e) => {
    setInputValue(e.target.value);
  }
    return(
      <div className={styles.box}>
        <ul id="messages">
          {props.messages.map((item) => {
            return (<li>{auth.user + item}</li>)
          })}
        </ul>
        <form action="" onSubmit={(e) => emitMessage(e)}>
          <input id="m" ref={inputRef}onChange={(e) => bindValue(e)}/><button>Send</button>
        </form>
      </div>
    );
}

export default ChatBox;