import React, { Component } from "react";
import style from "./Loading.css";

class Loading extends Component{

  componentDidMount() {
  }
  render(){
    return(
      <div >
        <div className={style.loading}>
          <h1>Johnny's Online Chat Room</h1>
          <button></button>
        </div>
      </div>
    );
  }
}

export default Loading;