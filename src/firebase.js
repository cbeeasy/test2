import firebase from 'firebase/app'
import 'firebase/database' // If using Firebase database
import 'firebase/storage' // If using Firebase storage
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyD6VmsTTcs830OKNKYt7hKeFp6M5skZgEg',
  authDomain: 'test2-7b9c7.firebaseapp.com',
  databaseURL: 'https://test2-7b9c7.firebaseio.com',
  projectId: 'test2-7b9c7',
  storageBucket: 'test2-7b9c7.appspot.com',
  messagingSenderId: '31034122774'
}

firebase.initializeApp(config)

const firebaseDB = firebase.database()
const firebaseArticles = firebaseDB.ref('articles')
const firebaseTeams = firebaseDB.ref('teams')
const firebaseVideos = firebaseDB.ref('videos')

const firebaseLooper = (snapshot) => {
  const data = []
  snapshot.forEach((child) => {
    data.push({
      ...child.val(),
      id: child.key
    })
  })
  return data
}

export {
  firebase, firebaseDB, firebaseArticles, firebaseTeams, firebaseVideos, firebaseLooper
}
