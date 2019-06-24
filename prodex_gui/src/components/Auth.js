import firebase from 'firebase';

 export const Auth = {
    CreateUser: (email,password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      
            if(error){
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(error)
              alert(errorMessage)
              return
            }
            
            // ...
            }.bind(this));
    },

    LogginUser: (email,password) => {
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    },

    LogOut: () => {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        
      }).catch(function(error) {
        alert(error)
      });
    }

};

