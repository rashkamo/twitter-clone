// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDzAojoGkehyIdl_7rkI-7FXuyz_CRFYL0",
  authDomain: "twitter-clone-f2244.firebaseapp.com",
  projectId: "twitter-clone-f2244",
  storageBucket: "twitter-clone-f2244.appspot.com",
  messagingSenderId: "1033431257907",
  appId: "1:1033431257907:web:26a26a15abfac9cc2c2446",
  measurementId: "G-1CLRGYLD31",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
