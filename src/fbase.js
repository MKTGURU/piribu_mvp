import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB9ILbfuEHvQkuMyaVME6g7Y6OnmxVFN-Y",
  authDomain: "piribu-mvp.firebaseapp.com",
  projectId: "piribu-mvp",
  storageBucket: "piribu-mvp.appspot.com",
  messagingSenderId: "507378290575",
  appId: "1:507378290575:web:997d8fe492806bb9b405fa",
  measurementId: "G-YZFJDJYT3E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storageService = getStorage(app);
const dbService = getFirestore(app);
const analytics = getAnalytics(app);
export {
  app,
  auth,
  ref,
  storageService,
  dbService,
  analytics,
  collection,
  getDocs,
  addDoc,
};
