import { useState,useEffect,useContext,createContext } from "react";

const AuthContext = createContext()



export function AuthContextProvider(children){

    return(
    <AuthContext.Provider>)
        {children}
        </AuthContext.Provider>
    
}