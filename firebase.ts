import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAe12M7psIdIC4k2ohOh4lmxpcnZCi1Dbs',
  authDomain: 'openai-app-7aaa5.firebaseapp.com',
  projectId: 'openai-app-7aaa5',
  storageBucket: 'openai-app-7aaa5.appspot.com',
  messagingSenderId: '435253881010',
  appId: '1:435253881010:web:27f6329d3c26a45148c1ab',
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
