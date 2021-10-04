import * as firebase from "firebase/app";
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCqrE9cojZsL48WpUVDttIRg9tf_DeHro",
    authDomain: "reactjs-project-513fb.firebaseapp.com",
    projectId: "reactjs-project-513fb",
    storageBucket: "reactjs-project-513fb.appspot.com",
    messagingSenderId: "971295041608",
    appId: "1:971295041608:web:1581a43b242546bd14907d",
    measurementId: "G-X9K9D6NWVB"
};

// firebase.initializeApp(firebaseConfig)

// const storage = firebase.storage();

// export { storage, firebase as default };

export const app = firebase.initializeApp(firebaseConfig);