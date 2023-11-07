// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzMCWJOy3hcGqG-vCXq1zI8V1ZKGM5edU",
  authDomain: "fir-class8-c822d.firebaseapp.com",
  projectId: "fir-class8-c822d",
  storageBucket: "fir-class8-c822d.appspot.com",
  messagingSenderId: "404046262608",
  appId: "1:404046262608:web:97ea90d321a69819f93c55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);