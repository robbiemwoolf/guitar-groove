import React, { Component } from "react";
import './App.css';
import Header from "./header/Header";
import Metronome from "./metronome/Metronome";

class App extends Component{
  render(){
    return(
        <>
            <Header />
            <Metronome />
        </>
    );
  }
}

export default App;