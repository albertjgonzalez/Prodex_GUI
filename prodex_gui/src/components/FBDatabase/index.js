import firebase from 'firebase';


const FBDatabase = {
    addUser: (database,name,email,uid) => {
        
        database.ref('users/' + uid).set({
          name,
          email,
          beatpacks:{}
        });
      },

    getUser: (database,email) => {
//       var userId = firebase.auth().currentUser.uid;
// return database().ref('/users/' + userId).once('value').then(function(snapshot) {
//   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   // ...
// });
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