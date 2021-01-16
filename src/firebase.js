import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDP6VrIrWNKzEkx8J9Qz7vDYlscMzU1piw",
    authDomain: "clone-40963.firebaseapp.com",
    databaseURL: "https://clone-40963.firebaseio.com",
    projectId: "clone-40963",
    storageBucket: "clone-40963.appspot.com",
    messagingSenderId: "835328183606",
    appId: "1:835328183606:web:b7e2a1ddd5999049087797",
    measurementId: "G-KYG19EBYQT"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export { db, auth};
