import axios from "axios";
import { useState ,useEffect} from "react"
import React from "react";
import { useParams } from "react-router-dom";
import { Form } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

function EditProduct() {
    const{id}=useParams();

    const [success, setSuccess] = useState(false);
    const [error,setError]=useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [product, setProduct] = useState({
        title: '',
        description: '',
        category: '',
        price: '',
        image: '',
        rate:'',
        count:''
    });
   
   
   
    {/* Handle the form submission */ }
    const handleUpdate = async (e) => {
        e.preventDefault();

        const rating={
            rate:product.rate,
            count:product.count
        }
        const newProduct={
            id:Math.floor(Math.random()*Date.now()),
            rating:rating,
            ...product
        }
        delete newProduct.count;
        delete newProduct.rate;
        try {
        await axios.put(`https://fakestoreapi.com/products/${id}`,JSON.stringify(newProduct))
        .then(res =>console.log(res))
        setSubmitted(true);
        setError(null);
        
        }catch{
            (error => console.log(error));
        setSubmitted(false);
    }}



        useEffect( () => {
            const getProductIdById = async()=>{
            axios.get(`https://fakestoreapi.com/products/${id}`)
                .then((res) => setProduct({
                    title:res.data.title,
                    description:res.data.description,
                    price:res.data.price,
                    category:res.data.category,

                }))
                .catch(error =>console.log(error));
            }
            getProductIdById();
            },[])


    return (
        <div className="container bg-info-subtle">
            <h2 className="mt-5">Update Product</h2>

            {submitted && <Alert variant="success" dismissible>{product.title} updated successfully!</Alert>}
            {error && <Alert variant="danger" dismissible>{error}</Alert>}

            <form className="row g-3" onSubmit={handleUpdate}>
             
                {/* Title */}
                <div className="col-md-6">
               
                    <label htmlFor="title" className="form-label">Title</label>
                   <input onChange={(e) =>setProduct({...product,title:e.target.value})}value={product.title}  type="text"className="form-control" id="title" name="title"/>
                </div>
                <div className="col-md-6">
               
               <label htmlFor="description" className="form-label">Description</label>
              <input onChange={(e) =>setProduct({...product,description:e.target.value})}value={product.description}type="text"className="form-control" id="description" name="description"/>
           </div>
           <div className="col-md-6">
               
               <label htmlFor="price" className="form-label">Price</label>
              <input onChange={(e) =>setProduct({...product,price:e.target.value})}value={product.price}type="text"className="form-control" id="price" name="price"/>
           </div>
           <div className="col-md-6">
               
               <label htmlFor="category" className="form-label">Category</label>
              <input onChange={(e) =>setProduct({...product,category:e.target.value})}value={product.category} type="text"className="form-control" id="category" name="category"/>
           </div>
           <div className="col-12">
            <button type="submit" className="btn btn-primary" >Update product</button>
            </div>
          </form>
          </div>
          )}
export default EditProduct;