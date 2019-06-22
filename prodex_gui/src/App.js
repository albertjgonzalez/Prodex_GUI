import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import UploadScreen from './components/UploadScreen';
import LoginScreen from './components/LoginScreen.js';
import SignUpScreen from './components/SignUpScreen.js'

var firebase = require('firebase');
var firebaseui = require('firebaseui');


class App extends React.Component {
  state={
    loggedIn:false,
    creatingUser: false,
  }

  verifyUser(){
    this.setState({
      loggedIn:true
    })
  }

  createUser(){
    this.setState({
      creatingUser:true
    })
  }


 render(){
  if(this.state.creatingUser){
    return (
      <SignUpScreen createUser={()=>this.setState({creatingUser:false})}/>
    )
  }
  if(this.state.loggedIn){
      return(
        <UploadScreen />
    )
    
  }
      return (
        <LoginScreen createUser={()=>this.createUser()} verifyUser={()=>{this.verifyUser()}}/>
      )
 }
  
}

export default App;
