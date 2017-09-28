import firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyD_ffBRpdBZRdF8EAHgxsGnzjC64UgGTtk",
    authDomain: "worst-taco-project-f8627.firebaseapp.com",
    databaseURL: "https://worst-taco-project-f8627.firebaseio.com",
    projectId: "worst-taco-project-f8627",
    storageBucket: "",
    messagingSenderId: "665856050770"
  };
  firebase.initializeApp(config);

  export default firebase;