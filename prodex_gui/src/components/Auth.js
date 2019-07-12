import firebase from 'firebase';
import FBDatabase from './FBDatabase';

 export const Auth = {
    CreateUser: (name,email,password,changeLogginState,creatingUser,addUserToDB) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(success=>{
          addUserToDB(name,email,success.user.uid)
          changeLogginState(true)
          creatingUser(false)
        }).catch(function(error) {
      
            if(error){
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(error)
              alert(errorMessage)
              return
            }
            // ...
            });
    },

    LogginUser: (email,password,changeLogginState,saveUserInfo) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(success=>{
      changeLogginState(true)
      saveUserInfo(email,success.user.uid)
        console.log(success.user.uid)
      }).catch(function(error) {
        // Handle Errors here.
        console.log(email)
        alert(error.message)
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // ...
        
      });
    },

    LogOut: (changeLogginState) => {
      firebase.auth().signOut().then(success=> {
        // Sign-out successful.
        changeLogginState(false)
      }).catch(function(error) {
        alert(error)
      });
    }

};

