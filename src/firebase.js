import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCN-nY-ZJZgxwEGFgqMMZqxi8nD1mZVQis',

  authDomain: 'linkedin-clone-dfa4d.firebaseapp.com',

  projectId: 'linkedin-clone-dfa4d',

  storageBucket: 'linkedin-clone-dfa4d.appspot.com',

  messagingSenderId: '526614062190',

  appId: '1:526614062190:web:f5512c655aed8aeb13327f',

  measurementId: 'G-01J0RRLV5K',
}

const firebaseApp = firebase.initialzeapp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
export { db, auth }
