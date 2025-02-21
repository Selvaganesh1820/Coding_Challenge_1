import React, { useContext } from 'react'
import AuthContext from './AuthProvider'
import { Navigate, Outlet } from 'react-router-dom'

export const RequireAuth = () => {
    const {auth}=useContext(AuthContext)
  return (
    auth?.token?<Outlet/>:<Navigate to="/login"/>
  )
}
