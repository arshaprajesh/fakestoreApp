import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router';


function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
  
    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Failed to fetch products.");
                setLoading(false);
            })
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;

    
    return (
        <>
            <Container>
                <Row className="custom-background bg-dark text-white" >{/* for background color*/}
                    {products.map((product) => (
                        <Col key={product.id} className="mb-3" sm={6} md={4} lg={3}>
                           
                            <Card className="card h-100"style={{ backgroundColor:'wheat', width: '250px', padding: '10px', margin: '20px', borderRadius: '30px', }}>{/* for same card size and shadow*/}
                                <Card.Img variant="top" src={product.image} alt={product.title} />
                                <Card.Body>
                                    <Card.Title>${product.title}</Card.Title>
                                    <Card.Text><b>{`price : ${product.price}`}</b></Card.Text>
                                </Card.Body>
                                <Link className="custom-button" to={`/products/${product.id}`}>View Details</Link>
                               
                            </Card>
                          
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    )
}

export default ProductList;