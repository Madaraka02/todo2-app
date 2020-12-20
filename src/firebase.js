  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAHKo8k1eBjkDrQ0WcONb3IA-7ygml9XVk",
    authDomain: "todo-app-567dd.firebaseapp.com",
    databaseURL: "https://todo-app-567dd.firebaseio.com",
    projectId: "todo-app-567dd",
    storageBucket: "todo-app-567dd.appspot.com",
    messagingSenderId: "375819892080",
    appId: "1:375819892080:web:0c9b8d25a41da8887fcbb5",
    measurementId: "G-NG1Q66TQTM"

  });

  const db = firebaseApp.firestore();

  export default db;