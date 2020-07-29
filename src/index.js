import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  
    apiKey: "AIzaSyByRvXFI8tyN-RBvnbK5DKsppDlXiV_N8A",
    authDomain: "cart-64068.firebaseapp.com",
    databaseURL: "https://cart-64068.firebaseio.com",
    projectId: "cart-64068",
    storageBucket: "cart-64068.appspot.com",
    messagingSenderId: "960748067448",
    appId: "1:960748067448:web:4519d63f0efec78a4e6b8d"
  };
  
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));


serviceWorker.unregister();



