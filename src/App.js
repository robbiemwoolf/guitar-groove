import React, { Component } from "react";
import './App.css';
import Header from "./header/Header";
import AnalyzerBPM from "./AnalyzerBPM/AnalyzerBPM";

class App extends Component{
  render(){
    return(
        <>
            <Header />
            <AnalyzerBPM />
        </>
    );
  }
}

export default App;