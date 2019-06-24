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
    }
};

