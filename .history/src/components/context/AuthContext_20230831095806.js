import { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider(children) {
    const[user,setUser]=useState({})

    function signUp (email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logOut(){
      return signOut(auth)
    }
 
  <AuthContext.Provider value={{signUp,user,logIn,}}>{children}</AuthContext.Provider>;
}

export function UserAuth() {
  return useContext(AuthContext);
}