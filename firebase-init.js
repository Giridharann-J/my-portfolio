// Firebase Configuration (Optional - for Analytics)
// Uncomment the script tags in index.html if you want to enable Firebase Analytics

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCTJNw-WTWZ5467PPXoMVOPjvN68euoB3k",
  authDomain: "giridharan-j.firebaseapp.com",
  projectId: "giridharan-j",
  storageBucket: "giridharan-j.firebasestorage.app",
  messagingSenderId: "416603604043",
  appId: "1:416603604043:web:effc829835d5a01c2839ce",
  measurementId: "G-8C5995TVJY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase initialized with Analytics");
