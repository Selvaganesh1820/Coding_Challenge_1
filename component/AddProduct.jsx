import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ProductService from '../Services/ProductService'
 
export const AddProduct = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const navigate = useNavigate()
    const { id } = useParams()
    const changeTitle = () => {
        if (id) {
            return <h2 className='text-center'>Update Product</h2>
        }
        else {
            return <h2 className='text-center'>Add Product</h2>
 
        }
    }
    useEffect(
        () => {
            console.log("useeffect fired....")
            if (id) {
                ProductService.getProductById(id).then(
                    (response) => {
                        console.log("response received from getproductbyid api",
                            JSON.stringify(response.data))
                        setTitle(response.data.title)
                        setPrice(response.data.price)
                        setDescription(response.data.description)
                        setImage(response.data.image)
                        setCategory(response.data.category)
                    }
                ).catch(
                    error => { console.log("error occured...", error) })
            }
        }, [])
 
 
    const saveOrUpdateProduct = (e) => {
        e.preventDefault()
        const productObj = { title, price, description, image, category }
        console.log("Product obj received from form...", productObj)
        if(id){
            ProductService.updateProductById(id, productObj)
            .then((response)=>{
                console.log(JSON.stringify(response.data))
                navigate('/products')
            }).catch(error=>{
                console.log(error)
            }).finally(console.log("Finally..."))
        }
        else{
        ProductService.saveProduct(productObj).then(response => {
            console.log("Response from save product API ", JSON.stringify(response.data))
            navigate('/products')
        }
 
        ).catch(error => {
            console.log("error occured....")
        }
 
        ).finally(() => {
            console.log("In finally block")
        })}
 
    }
  return (
    <div>
        <div className='container'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {changeTitle()}
                <div className='card-body'>
                    <form>
                        <div className="form-group mb-2">
                            <label className='form-label'>
                            Title:
                            </label>
                            <input type="text" placeholder="Enter the Title" name='title'
                            className="form-control" id="title" value={title}
                            onChange={(e)=>setTitle(e.target.value)} />
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>
                            Price:
                            </label>
                            <input type="number" placeholder="Enter the Price" name='price'
                            className="form-control" id="title" value={price}
                            onChange={(e)=>setPrice(e.target.value)} />
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>
                            Description:
                            </label>
                            <input type="textarea" placeholder="Enter the Description" name='description'
                            className="form-control" id="description" value={description}
                            onChange={(e)=>setDescription(e.target.value)} />
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>
                            Category:
                            </label>
                            <input type="text" placeholder="Enter the Category" name='category'
                            className="form-control" id="category" value={category}
                            onChange={(e)=>setCategory(e.target.value)} />
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>
                            Image:
                            </label>
                            <input type="text" placeholder="Enter the Image" name='image'
                            className="form-control" id="image" value={image}
                            onChange={(e)=>setImage(e.target.value)} />
                        </div>
                        <br/>
                        <button className='btn btn-success' onClick={(e)=>saveOrUpdateProduct(e)}>
                            Save Product
                        </button>
                        &nbsp;
                        <Link to='/listproducts' className='btn btn-danger'>
                            Cancel
                        </Link>
                    
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
