import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC9z7OVuyrHri_9bHKbAbgeEKqGwrNOAkI',
  authDomain: 'linkedin-clone-54e91.firebaseapp.com',
  projectId: 'linkedin-clone-54e91',
  storageBucket: 'linkedin-clone-54e91.appspot.com',
  messagingSenderId: '36133241572',
  appId: '1:36133241572:web:7d8d5fcfd8fd6ef99ae2f1',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
