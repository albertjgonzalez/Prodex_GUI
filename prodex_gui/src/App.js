import React from 'react';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import './App.css';
import UploadScreen from './components/UploadScreen';
import LoginScreen from './components/LoginScreen.js';
import SignUpScreen from './components/SignUpScreen.js'

var firebaseConfig = {
  apiKey: "AIzaSyB-_QP7PPOGYvgIvdKGKt9J1FKEi1uYhJM",
  authDomain: "prodex.firebaseapp.com",
  databaseURL: "https://prodex.firebaseio.com",
  projectId: "prodex",
  storageBucket: "prodex.appspot.com",
  messagingSenderId: "359096778147",
  appId: "1:359096778147:web:f26c8b8833b7292f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  constructor(props){
    super(props)
  }

  state={
    email:'albert@email.com',
    password:'emailemail',
    loggedIn:false,
    creatingUser: false,
  }
      

  verifyUser(email,password){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      
      if(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error)
        alert(errorMessage)
      }
      else{
        
          this.setState({
            loggedIn:true
          })
        }
      
      // ...
      }.bind(this));
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
        <LoginScreen createUser={()=>this.createUser()} verifyUser={()=>{this.verifyUser(this.state.email,this.state.password)}}/>
      )
 }
  
}

export default App;
