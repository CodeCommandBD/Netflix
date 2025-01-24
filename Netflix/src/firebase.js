
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc,collection, getFirestore} from 'firebase/firestore'
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyD5BYQPQuVu0UGzpheuMsKqJ2hk4MqBYJw",
  authDomain: "codecommandbd.firebaseapp.com",
  projectId: "codecommandbd",
  storageBucket: "codecommandbd.firebasestorage.app",
  messagingSenderId: "548325178897",
  appId: "1:548325178897:web:f95bfbf4e5facb0b60fbb0",
  measurementId: "G-MV3CQ44H0G"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)


const signup = async (name, email, password)=>{
    try{
       const res =  await createUserWithEmailAndPassword(auth,email,password)
       const user =res.user;
       await addDoc(collection(db,'user',{
        uid: user.uid,
        name,
        authProvider: 'local',
        email,
       }))
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('_').join(' '));
    }
}

const login = async (email, password)=>{
    try{
       await signInWithEmailAndPassword(auth,email, password)
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('_').join(' '))
    }
}

const logout = () =>{
    signOut(auth)
}

export {auth, db, login, signup, logout}