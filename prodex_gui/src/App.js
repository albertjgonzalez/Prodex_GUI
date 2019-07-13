import React from 'react';
import firebase from 'firebase';
import './App.css';
import { Auth } from './components/Auth'
import UploadScreen from './components/UploadScreen';
import LoginScreen from './components/LoginScreen.js';
import SignUpScreen from './components/SignUpScreen.js';
import FBDatabase from './components/FBDatabase'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name:'',
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
  this.database = firebase.database();
  }
  

  addUserToDB(name,email,uid){
     this.setState({name,email,uid})
    FBDatabase.addUser(this.database,this.state.name,this.state.email,this.state.uid)
    
  }

  changeLogginState(state){
   this.setState({loggedIn:state})
 } 

 saveUserInfo(email,uid){
   this.setState({email,uid})
   console.log(this.state.uid)
 }
  submitUser(email,password){
  Auth.LogginUser(email,password,
    (state)=>this.changeLogginState(state),
    (email,uid)=>this.saveUserInfo(email,uid)
    )}

  verifyUser(email,password){
    console.log(email,password)
  }

  createUser(creatingUser){
   this.setState({creatingUser}) 
  }

  componentWillMount() {
      
    // firebase.auth().onAuthStateChanged(function (user) {
    //   if (user) {
    //     console.log(user)
    //     this.setState({
    //       loggedIn: true,
    //       creatingUser: false,
    //       displayName: user.displayName,
    //       email: user.email,
    //       emailVerified: user.emailVerified,
    //       photoURL: user.photoURL,
    //       isAnonymous: user.isAnonymous,
    //       uid: user.uid,
    //       providerData: user.providerData
    //     })
    //   } else {
    //     this.setState({
    //       email:'',
    //       password:'',
    //       loggedIn:false,
    //       creatingUser: false,
    //       displayName: '',
    //       emailVerified: '',
    //       photoURL: '',
    //       isAnonymous: '',
    //       uid: '',
    //       providerData: ''
    //     })
    //   }
    // }.bind(this));
  }

 render(){
  if(this.state.creatingUser){
    return (
      <SignUpScreen 
        createUser={
          (name,email,password)=>Auth.CreateUser(name,email,password,
            (state)=>this.changeLogginState(state),
            (state)=>this.createUser(state),
            (name,email,uid)=>this.addUserToDB(name,email,uid)
            )}/>
    )
  }
  if(this.state.loggedIn){
    FBDatabase.getUser(this.database,this.state.uid,(userInfo)=>{
      this.set({name:userInfo})
    })
      return(
        <UploadScreen 
        databaseRef={this.state.databaseRef}
        userName={this.state.email}
        packName={'beatpack'}
        logOut={()=>Auth.LogOut((state)=>this.changeLogginState(state))}/>
    )
    
  }
      return (
        <LoginScreen createUser={(state)=>this.createUser(state)} submitUser={(email,password)=>this.submitUser(email,password)}/>
      )
 }
  
}

export default App;
