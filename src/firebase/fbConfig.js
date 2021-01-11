import firebase from "firebase/app"
import "firebase/firestore"
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBgmUq0E2ECDiu-cb63-s_drHCgH3He1XY",
    authDomain: "mario-plan-e3ae0.firebaseapp.com",
    projectId: "mario-plan-e3ae0",
    storageBucket: "mario-plan-e3ae0.appspot.com",
    messagingSenderId: "445403269475",
    appId: "1:445403269475:web:994cc00dc9682b77a36b56"
  };

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots : true})

export default firebase

  