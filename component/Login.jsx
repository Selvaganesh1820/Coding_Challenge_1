import React, { useContext, useState } from 'react'
import ProductService from '../Services/ProductService'
import { useNavigate } from 'react-router-dom'
import AuthContext from './AuthProvider'

export const Login = () => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const {setAuth}=useContext(AuthContext)

    const login=(e)=>{
        e.preventDefault()
        const loginobj={username,password}
        ProductService.loginAPI(loginobj).then(response => {
        console.log("Response from LoginAPI ", JSON.stringify(response.data))
        console.log("Response from LoginAPI ", JSON.stringify(response.status))
        setAuth(response.data)
        if(response.status===200)
        navigate('/products')
        }).catch(error=>{
            console.log(error)})
            navigate('/error')
            
    }
  return (
    <div>
        <div className='container'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h1>Login</h1>
                <div className='card-body'>
                    <form>
                        <div className="form-group mb-2">
                            <label className='form-label'>
                            UserName:
                            </label>
                            <input type="text" placeholder="Enter the UserName" name='username'
                            className="form-control" id="username" value={username}
                            onChange={(e)=>setUsername(e.target.value)} />
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>
                            Password:
                            </label>
                            <input type="text" placeholder="Enter the Password" name='password'
                            className="form-control" id="password" value={password}
                            onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <br/>
                        <button className='btn btn-success' onClick={(e)=>login(e)}>
                            Submit
                        </button>
                    
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

