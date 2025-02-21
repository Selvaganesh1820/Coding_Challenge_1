import React, { useEffect, useState } from 'react'
import ProductService from '../Services/ProductService'
import { HeaderComponent } from './HeaderComponent'
import { FooterComponent } from './FooterComponent'
import { Link, useNavigate } from 'react-router-dom'

export const Listproducts = () => {
    const [productArray,setProductArray]=useState([])
    // const [cartArray, setCartarray] = useState([])
    const navigate = useNavigate()
    const deleteProduct=(id)=>{
        console.log("Delete product handler triggered",id)
        ProductService.deleteProductById(id).then((response) => {
            console.log(JSON.stringify(response.data))
            getAllProductsFromApi()
            navigate('/listproducts')
            
    })}
    const getAllProductsFromApi=()=>{
        console.log("useeffect got triggered")
        ProductService.getAllProducts().then((response)=>{
            console.log(JSON.stringify(response.data))
            setProductArray(response.data)


        }
    ).catch((error)=>{console.log(error)})
    .finally(()=>{
        console.log("finally")}
    )

    }
    useEffect(()=>{
        
    },[])
  return (
    <>
    <HeaderComponent/>
    <div className="container">
        <h1 className='text-center'>Product Details</h1>
        <Link to='/add-product' className='btn btn-outline-primary'>Add Product</Link>
        <br/>
        <br/>
        <table class="table table-striped table-danger table-hover">
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>category</th>
                <th>image</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {productArray.map((product, index) =>(<tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                    <td>{product.category}</td>
                    <td>{product.image}</td>
                    <td>
                        <Link className='btn btn-info' 
                        to={'/edit-product/'+product.id}>Update</Link>
                        </td>
                        <td>
                        <button className='btn btn-danger' onClick={()=>{
                            deleteProduct(product.id)
                        }}>
                            Delete</button>
                    </td>
                

                
            </tr>))}
            </tbody>
        </table>
    </div>
    <FooterComponent/>
    </>
  )
}