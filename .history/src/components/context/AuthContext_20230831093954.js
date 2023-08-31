import { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../firebase";
import 

const AuthContext = createContext();

export function AuthContextProvider(children) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

export function UserAuth() {
  return useContext(AuthContext);
}
