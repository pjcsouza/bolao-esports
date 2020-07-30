import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import 'firebase/storage';
import 'firebase/firebase-functions'
import firebaseConfig from './firebaseconfig';

var app = firebase.initializeApp(firebaseConfig);


const bl = {
    createUser: async function(user){
        return firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(res => {
            return res.user.uid;
         }).catch(function(error) {
             var errorCode = error.code;
             var errorMessage = error.message;
             return {error: errorCode + " " + errorMessage};
           });
     },
     signIn: async function(email, password){
        return firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
             return {sucess: res};
         }).catch(function(error) {
             var errorCode = error.code;
             var errorMessage = error.message;
             return {error: errorCode + " " + errorMessage};
           });
     },

     currentUser: async function(){
         return localStorage.getItem("user");
     },

     logout: async function(){
        return firebase.auth().signOut();
     }

}

export default bl;