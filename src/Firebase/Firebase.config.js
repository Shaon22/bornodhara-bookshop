// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_API_KEY,
//   authDomain:import.meta.env.VITE_AUTHDOMAIN,
//   projectId:import.meta.env.VITE_PROJECT_ID,
//   storageBucket:import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId:import.meta.env.VITE_MESSAGESING_SENDER_ID,
//   appId:import.meta.env.VITE_APP_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyAdlUiHgEzn3MOwznptEwR9hlecB0IKc4M",
  authDomain: "online-library-4ab73.firebaseapp.com",
  projectId: "online-library-4ab73",
  storageBucket: "online-library-4ab73.firebasestorage.app",
  messagingSenderId: "167348261903",
  appId: "1:167348261903:web:367e95a58aa5c0f5ac7f7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth