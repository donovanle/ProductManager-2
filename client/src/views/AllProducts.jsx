import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const AllProducts = () => {
    const [products, setProducts] = useState()

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>setProducts(res.data))
            .catch(err=>console.log(err))
    },[])


  return (
    <div>
        <h1>All Products:</h1>
        <div>
            {
                products?
                    products.map((product, i)=>(
                        <p key={i}><Link to={`/products/${product._id}`}>{product.title}</Link></p>
                    )):
                    console.log("No Products")
            }
        </div>
    </div>
  )
} 

export default AllProducts