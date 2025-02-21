import React, { useEffect, useState } from 'react'
import UserService from '../services/UserService';
import { Link, Navigate, useNavigate } from 'react-router-dom';
export default function ListUsers() {
    const[userArray,setUserArray] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        console.log("Use effectTriggered");
        getAllUsers()
        
    },[]);

    //to get all the users
    const getAllUsers = () =>{
        UserService.getAllUsers()
        .then((response)=>{
            console.log("Response obtained from getAllUsers API",JSON.stringify(response.data));
            setUserArray(response.data);
        })
        .catch((error)=>{
            console.log("Error in getAllUsers API",error);
        }).finally(()=>{
            console.log("Finally block executed");
        });
        navigate('/')
    }

    const getSorted=()=>{
        UserService.tosort().then((response)=>{
            console.log("Response obtained from tosort API",JSON.stringify(response.data));
            setUserArray(response.data);
        }).catch((error)=>{
            console.log("Error in sorting..",error)
        }).finally(()=>{
            console.log("Finally block excecuted")
        })
    }

    const delUser=(id)=>{
        console.log("delete User is triggered with ID:",id);
        UserService.todelete(id).then((response)=>{
            console.log("Response obtained from deleting :",JSON.stringify(response.data));
            getAllUsers();
            navigate('/')
        })
    }

  return (
    <>
    <div className="container">
    {console.log("List products got rendered")}
    <h2 className="text-center mt-5">User Details</h2>
    <div className="d-flex justify-content-center my-3">
          <Link to="/add-user" className="btn btn-primary btn-md ">
            Add User
          </Link>
          <button className="btn btn-primary mx-4" onClick={getSorted}>Sort Descending</button>

        </div>
    <table className="p-5 m-5 table table-bordered border-secondary table-striped table-hover">
          <thead className="">
            <tr>
              <th>id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>UserName</th>
              <th>Password</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userArray.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name.firstname}</td>
                <td>{user.name.lastname}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.phone}</td>
                <td>{user.address.number} {user.address.street}, {user.address.city}, {user.address.zipcode}</td>


                <td>
                    <button className='btn btn-primary btn-md'
                    onClick={()=>{
                        delUser(user.id)
                    }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </> 
    )
}