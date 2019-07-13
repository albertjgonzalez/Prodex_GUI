import firebase from 'firebase';


const FBDatabase = {
    addUser: (database,name,email,uid) => {
        
        database.ref('users/' + uid).set({
          name,
          email,
          beatpacks:{}
        });
      },

    getUser: (database,uid,updateUserInfo) => {
      console.log(uid)
      database.ref("users/"+uid).child('name').once("value")
        .then(function(snapshot) {
          updateUserInfo(snapshot.val())
});
    },

    addBeat: (database,name,beatName,beatPackName) => {
      // Get a key for a new Post.
  //     var newBeatKey = database().ref('users/').child(name/beatpacks/).push().key;
      
  //      // Write the new post's data simultaneously in the posts list and the user's post list.
  // var updates = {};
  // updates['/beatpacks/' + beatName +] = postData;

  // return firebase.database().ref().update(updates);

    }
    }

export default FBDatabase