import firebase from "firebase/app"
import "firebase/firestore"
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "apikey",
    authDomain: "authdomain",
    projectId: "projectId",
    storageBucket: "storagebucket",
    messagingSenderId: "senderID",
    appId: "appId"
  };

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots : true})

export default firebase

  
