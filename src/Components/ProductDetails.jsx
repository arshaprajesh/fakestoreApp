import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";





function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [clickCount, setClickCount] = useState(0);
    const [success,setSuccess]=useState('');
    const [show,setShow]=useState(false);


    const handleClose = () =>setShow(false);
    const handleShow = () =>setShow(true);

    const navigate=useNavigate();
   
  

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
       
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
                console.log(response.data)
            })
            .catch((error) => {
                setError("Failed to load product details");
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;

    const handleAddToCartClick = () => {
        setClickCount(clickCount + 1);
        // Here you would also add the product to the cart logic
      };
   
      const handleDelete= (event) =>{
        if(event.target.name == "delete"){
            setError(null)
            axios.delete(`https://fakestoreapi.com/products/${id}` )
           .then(response =>{
              setSuccess(response.data);
              setLoading(false);
              setSuccess(true);
              setSuccess('successfully deleted')
              handleClose();
              navigate("/products");
           })
           .catch(exp => {
            handleClose();
            setError(`Failed to Delete:${exp.message}`);
            setLoading(false);
           
           });
          
      }}
    
    return (
        
        <Container>
            <Card className="custom-background bg-black text-white">
                <Card.Img className="product-image" variant="top" src={product.image} alt={product.title} />
                <Card.Body>
                    <Card.Title><b>{product.title}</b></Card.Title>
                    <br/>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text><b>{product.category}</b></Card.Text>
                    <Card.Text><b>{`price :$ ${product.price}`}</b></Card.Text>
                    
                    <div className="mt-auto">
                    <Button onClick={handleAddToCartClick} >+ add to cart({clickCount})</Button>     
                    </div>
                </Card.Body>
               
                <Link className="custom-button bg-secondary btn-sm" to={`/editproduct/${product.id}`}>Update Details</Link>
                <br/>
                <Button variant="danger" type="submit" onClick={handleShow}>Delete</Button>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete the product</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" name="delete" onClick={handleDelete}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default ProductDetails;