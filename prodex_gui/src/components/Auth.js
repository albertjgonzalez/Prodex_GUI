import firebase from 'firebase';
import FBDatabase from './FBDatabase';

 export const Auth = {
    CreateUser: (name,email,password,changeLogginState,creatingUser,addUserToDB) => {
      console.log(email,password)
        firebase.auth().createUserWithEmailAndPassword(email, password).then(success=>{
          addUserToDB(name,email)
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

    LogginUser: (email,password,changeLogginState) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(success=>{
      changeLogginState(true)
        console.log(success)
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

