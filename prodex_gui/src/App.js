import React from 'react';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import './App.css';
import { Auth } from './components/Auth'
import UploadScreen from './components/UploadScreen';
import LoginScreen from './components/LoginScreen.js';
import SignUpScreen from './components/SignUpScreen.js'

const firebaseConfig = {

    apiKey: "AIzaSyB-_QP7PPOGYvgIvdKGKt9J1FKEi1uYhJM",
    authDomain: "prodex.firebaseapp.com",
    databaseURL: "https://prodex.firebaseio.com",
    projectId: "prodex",
    storageBucket: "prodex.appspot.com",
    messagingSenderId: "359096778147",
    appId: "1:359096778147:web:f26c8b8833b7292f"

}

firebase.initializeApp(firebaseConfig)

class App extends React.Component {
  constructor(props){
    super(props)
  }

  state={
    email:'',
    password:'',
    loggedIn:false,
    creatingUser: false,
    displayName: '',
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
        this.setState({
          email:'',
          password:'',
          loggedIn:false,
          creatingUser: false,
          displayName: '',
          emailVerified: '',
          photoURL: '',
          isAnonymous: '',
          uid: '',
          providerData: ''
        })
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
        <UploadScreen logOut={()=>Auth.LogOut()}/>
    )
    
  }
      return (
        <LoginScreen createUser={()=>this.createUser()}submitUser={(email,password)=>Auth.LogginUser(email,password)}/>
      )
 }
  
}

export default App;
