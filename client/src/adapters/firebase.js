// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
require('dotenv').config()

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process  .env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_ID,
//   measurementId: process.env.MEASUREMENT_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyDic4_vyIWzVGqp7Dw4BF80bWBMAumrHvk",
  authDomain: "flipkart-grid-170bd.firebaseapp.com",
  projectId: "flipkart-grid-170bd",
  storageBucket: "flipkart-grid-170bd.appspot.com",
  messagingSenderId: "714570548443",
  appId: "1:714570548443:web:5f616a46584681a44c78fe",
  measurementId: "G-FEC2RB6GNQ"
};
console.log(process.env.REACT_APP_API_KEY);


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;