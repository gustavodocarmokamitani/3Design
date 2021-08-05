import React from 'react';
import './Body.scss';
import image1 from '../image/image1.png';

import CardBody from './CardBody';
import posts from '../data/posts';

import { Container, Row, Col, Card } from 'react-bootstrap';

const Body = () => {
    return (
        <Container>
            <Row className='Body-Header' id='Home'>
                <Col xs={6} lg={6} className='Header-Col-1'>
                    <img className='Header-Image' src={image1}></img>
                </Col>
                <Col xs={6} lg={6}>
                    <div className='Header-Content'>
                        <h1>3D WebSite</h1>
                        <br />
                        <p>Faça sua empresa brilhar online com um site 3D personalizado, projetado especialmente para você por um designer profissional. </p> 
                        <p> Precisa de ideias? Coletamos alguns exemplos incríveis de sites 3D de nossa comunidade global de designers. Inspire-se e comece a planejar o design da web 3D perfeito hoje mesmo.
                        </p>
                    </div>
                </Col>
            </Row>

            <CardBody posts={posts}/>

        </Container>
    );
}

export default Body;