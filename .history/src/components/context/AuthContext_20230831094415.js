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
  createUserWithEmailAndPassword,
  return 
    }
  return;
  <AuthContext.Provider>{children}</AuthContext.Provider>;
}

export function UserAuth() {
  return useContext(AuthContext);
}
