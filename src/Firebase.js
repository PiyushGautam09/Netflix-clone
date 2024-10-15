
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBZ5WK1TjSwNjUYmGfxTC-MGX_Hg5R8P4s",
  authDomain: "netflix-a20ae.firebaseapp.com",
  projectId: "netflix-a20ae",
  storageBucket: "netflix-a20ae.appspot.com",
  messagingSenderId: "677557541917",
  appId: "1:677557541917:web:c800af5fe4184071f7baf4",
  measurementId: "G-H4DBXVMNX7"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app);
const db = getFirestore(app);


const signup = async (name,email,password)=>{
try {
   const res = await createUserWithEmailAndPassword(auth,email,password);
   const user = res.user;
   await addDoc(collection(db,"user"),{
    uid:user.uid,
    name,
    authProvider:"local",
    email,
   });
} catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))
}
}


const login = async(email,password)=>{
    try {
      await  signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}


const logout = ()=>{
    signOut(auth);
}

export {auth,db,login,signup,logout};