import React from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function Home() {


    return (

        <Container style={{ backgroundColor: 'lightblue', padding: '20px' }}>
      <Row >
        <Col >
            <h1 className="mt-5">𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙁𝘼𝙆𝙀 𝙎𝙏𝙊𝙍𝙀 </h1>
            <p>Made specially for fashion and electronics </p>
            </Col>
      </Row>
      <Row>
        <Col>
      
          <Carousel>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.thepackagingcompany.com/knowledge-sharing/wp-content/uploads/2020/09/5-Packaging-Tips-for-Selling-Products-Online-e1599060089773-1026x675.jpg"
                
                alt="Second slide"
              />
              <Carousel.Caption style={{  top: 100 , }} >
                <h1 style={{ textShadow: '2px 6px black',   }}>Latest fashion ᏰᎥᎶ ᏕᏗᏝᏋ</h1>
                <h2>limited time offer!!!</h2>
                <Link className="custom-button" to={`/products`}>shop now</Link>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.marketing91.com/wp-content/uploads/2019/10/1.-Advertisements.jpg"
                alt="Third slide"
              />
        
            </Carousel.Item>
          </Carousel>
          <div >
                <h1>✌𝓼𝓹𝓮𝓬𝓲𝓪𝓵 𝓸𝓯𝓯𝓮𝓻✌ 💰</h1>
                <p>ᔕ𝐚𝐯ｅ 𝓊ρ 丅𝑜 ５０% 𝑜ғғ</p>
                <p>11 th NOV 2025</p>
             
                <h1>𝐵𝓊𝓎 𝑜𝓃𝓁𝒾𝓃𝑒 𝑜𝓇 𝒶𝓉 𝒶𝓃 𝓕𝓪𝓴𝓮 𝓢𝓽𝓸𝓻𝓮 🙌</h1>
               
                   
            </div>
        </Col>
      </Row>
      </Container>

     
    )
}

export default Home;