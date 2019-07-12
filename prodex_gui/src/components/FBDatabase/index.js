import firebase from 'firebase';


const FBDatabase = {
    addUser: (database,name,email) => {
        
        database.ref('users/' + name).set({
          name,
          email,
          beatpacks:{}
        });
      }
    }

export default FBDatabase