import React from 'react'
import { Navigate } from 'react-router-dom'
import {UserAuth} from './context/AuthContext'
const ProtectedRoute = ({children}) => {
if(!user){
    return <Navigate to={'/'}/>
}else {}
}
export default ProtectedRoute