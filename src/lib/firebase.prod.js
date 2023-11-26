import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyD1z46KCDYMO0ZR1atnO5zjT5m2S5A6WIg",
  authDomain: "netflix-68f3d.firebaseapp.com",
  projectId: "netflix-68f3d",
  storageBucket: "netflix-68f3d.appspot.com",
  messagingSenderId: "623733131813",
  appId: "1:623733131813:web:afe1cfa4f8e77964e14dcc",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
