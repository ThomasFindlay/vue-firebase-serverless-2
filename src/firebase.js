import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import { firebaseConfig as config } from '@/config';
firebase.initializeApp(config);

const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

export const firestoreDb = firestore;
export const firebaseStorage = firebase.storage();
