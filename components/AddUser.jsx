import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import UserService from '../services/UserService';
export default function AddUser() {
    //state variable , function, initialize
    const[firstname, setFirstName]=useState("");
    const[lastname, setLastName]=useState("");
    const[email, setEmail]=useState("");
    const[username, setUserName]=useState("");
    const[password, setPassword]=useState("");
    const[phone, setPhone]=useState(""); 
    const[addressNumber, setAddressNumber]=useState("");
    const[addressStreet, setAddressStreet]=useState("");
    const[addressCity, setAddressCity]=useState("");
    const[addressZipCode, setAddressZipCode]=useState("");
  

    const{id} = useParams();
   //rrh
    const navigate = useNavigate();

    useEffect(()=>{
        console.log("Use effect ")
    })

    const saveUser = (e)=>{
        e.preventDefault();
        const userobj ={firstname,lastname,email,username,password,phone,addressNumber,addressStreet,addressCity,addressZipCode}
        console.log("Product obj received from",userobj);
        UserService.saveUser(userobj)
        .then((response)=>{
            console.log("Response obtained from saveuser() API",JSON.stringify(response.data));
            navigate('/')
        })
        .catch((error)=>{
            console.log("Error occured in saveUser() API",error);
        });
    }
  
    return (
    <div>
         <div className='container text-center'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <div className='card-body'>
                    <form>
                    
                    <div className='form-froup mb-2'>
                        <label className='form-label'>First Name</label>
                        <input type="text"
                        placeholder='Enter the First name'
                        name="name"
                        className='form-control'
                        value={firstname}
                        onChange={(e)=>{
                            setFirstName(e.target.value)
                        }} />
                    </div>
                    
                    <div className='form-froup mb-2'>
                        <label className='form-label'>Last Name</label>
                        <input type="text"
                        placeholder='Enter the last name'
                        name="name"
                        className='form-control'
                        value={lastname}
                        onChange={(e)=>{
                            setLastName(e.target.value)
                        }} />
                    </div>
                    
                    <div className='form-froup mb-2'>
                        <label className='form-label'>Email</label>
                        <input type="text"
                        placeholder='Enter the email'
                        name="email"
                        className='form-control'
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }} />
                    </div>
                  
                    <div className='form-froup mb-2'>
                        <label className='form-label'>Username</label>
                        <input type="text"
                        placeholder='Enter the username'
                        name="username"
                        className='form-control'
                        value={username}
                        onChange={(e)=>{
                            setUserName(e.target.value)
                        }} />
                    </div>

                    <div className='form-froup mb-2'>
                        <label className='form-label'>Password</label>
                        <input type="text"
                        placeholder='Enter the password'
                        name="password"
                        className='form-control'
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }} />
                    </div>
                   
                    <div className='form-froup mb-2'>
                        <label className='form-label'>Phone</label>
                        <input type="text"
                        placeholder='Enter the phone number'
                        name="phone"
                        className='form-control'
                        value={phone}
                        onChange={(e)=>{
                            setPhone(e.target.value)
                        }} />
                    </div>
                   
                    <div className='form-froup mb-2'>
                        <label className='form-label'>address number</label>
                        <input type="text"
                        placeholder='Enter the house number'
                        name="house number"
                        className='form-control'
                        value={addressNumber}
                        onChange={(e)=>{
                            setAddressNumber(e.target.value)
                        }} />
                    </div>
                    
                    <div className='form-froup mb-2'>
                        <label className='form-label'>address Street</label>
                        <input type="text"
                        placeholder='Enter the street'
                        name="street"
                        className='form-control'
                        value={addressStreet}
                        onChange={(e)=>{
                            setAddressStreet(e.target.value)
                        }} />
                    </div>
                    
                    <div className='form-froup mb-2'>
                        <label className='form-label'>address Cityr</label>
                        <input type="text"
                        placeholder='Enter the City'
                        name="City"
                        className='form-control'
                        value={addressCity}
                        onChange={(e)=>{
                            setAddressCity(e.target.value)
                        }} />
                    </div>
                    
                    <div className='form-froup mb-2'>
                        <label className='form-label'>ZipCode</label>
                        <input type="text"
                        placeholder='Enter the ZipCode'
                        name="zipcode"
                        className='form-control'
                        value={addressZipCode}
                        onChange={(e)=>{
                            setAddressZipCode(e.target.value)
                        }} />
                    </div>
                        <button 
                        className='btn btn-success btn-md'
                        type='submit'
                        onClick={(e)=>{
                            saveUser(e);
                        }}>
                            Save
                        </button>
                </form>
            </div>
        </div>
        </div>
        </div>
  )
}