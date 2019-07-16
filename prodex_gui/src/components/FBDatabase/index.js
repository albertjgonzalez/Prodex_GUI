import firebase from 'firebase';


const FBDatabase = {
  addUser: (database, name, email, uid) => {

    database.ref('users/' + uid).set({
      name,
      email,
      beatpacks: {}
    });
  },

  getUser: (database, uid, updateUserInfo) => {
    database.ref("users/" + uid).child('name').once("value")
      .then(function (snapshot) {
        updateUserInfo(snapshot.val())
      });
  },

  addBeat: (database, uid, beatInfo) => {
    let ref = database.ref("users/" + uid)
    let beatName = beatInfo[0]
    let beatPackName = beatInfo[1]  
    ref.child('beatpacks').child(beatPackName).child(beatName).set('link');
  }
}

export default FBDatabase