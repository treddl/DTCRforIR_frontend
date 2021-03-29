import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
 // add your Firebase Config here
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()


// collection references
const userDashboard = db.collection('cyberrangeDashboard')


// export utils/refs
export {
  db,
  userDashboard

}
