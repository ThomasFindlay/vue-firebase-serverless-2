import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyCj7j0XacDS8vafIRSwOm2g_f8jq3SS2C4',
  authDomain: 'vue-firebase-serverless-c3117.firebaseapp.com',
  databaseURL: 'https://vue-firebase-serverless-c3117.firebaseio.com',
  projectId: 'vue-firebase-serverless-c3117',
  storageBucket: 'vue-firebase-serverless-c3117.appspot.com',
  messagingSenderId: '167759236926'
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

export const firestoreDb = firestore;
export const firebaseStorage = firebase.storage();
