import React from 'react';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import './App.css';
import { Auth } from './components/Auth'
import UploadScreen from './components/UploadScreen';
import LoginScreen from './components/LoginScreen.js';
import SignUpScreen from './components/SignUpScreen.js'

const firebaseConfig = {
  apiKey: 'AIzaSyB-_QP7PPOGYvgIvdKGKt9J1FKEi1uYhJM',
  authDomain: 'prodex.firebaseapp.com'
}

firebase.initializeApp(firebaseConfig)

class App extends React.Component {
  constructor(props){
    super(props)
  }

  state={
    email:'albert@email.com',
    password:'emailemail',
    loggedIn:false,
    creatingUser: false,
    displayName: '',
    email: '',
    emailVerified: '',
    photoURL: '',
    isAnonymous: '',
    uid: '',
    providerData: ''
  }
      

  verifyUser(email,password){
    console.log(email,password)
  }

  createUser(){
    this.setState({
      creatingUser:true
    })
  }

  componentWillMount() {

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user)
        this.setState({
          loggedIn: true,
          creatingUser: false,
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          uid: user.uid,
          providerData: user.providerData,
        })
      } else {
        // User is signed out.
        // ...
      }
    }.bind(this));
  }

 render(){
  if(this.state.creatingUser){
    return (
      <SignUpScreen createUser={(email,password)=>Auth.CreateUser(email,password)}/>
    )
  }
  if(this.state.loggedIn){
      return(
        <UploadScreen />
    )
    
  }
      return (
        <LoginScreen createUser={()=>this.createUser()} verifyUser={()=>{this.verifyUser(this.props.email,this.props.password)}}/>
      )
 }
  
}

export default App;
