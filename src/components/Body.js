import React from 'react';
import './Body.scss';
import image1 from '../image/image1.png';

import CardBody from './CardBody';
import posts from '../data/posts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

import { Container, Row, Col, Card } from 'react-bootstrap';

const Body = () => {
    return (
        <Container>
            <Row className='Body-Header' id='Home'>
                <Col xs={6} lg={6} className='Header-Col-1'>
                    <img className='Header-Image' src={image1}></img>
                </Col>
                <Col xs={12} lg={6}>
                    <div className='Header-Content'>
                        <h1>Modelagem 3D e Prototipagem</h1>
                        <br />
                        <p>A prototipagem rápida é o desenvolvimento de modelos usando a tecnologia de impressão 3D, com isso os projetos ganham em agilidade. </p>
                        <p> A prototipagem é a concepção de protótipos para a produção de objetos, imprimindo modelos tridimensionais dos objetos, com a geração desse protótipo as indústrias podem validar a produção em série de seus produtos.
                        </p>
                        <br/>
                        <br/>                        
                        <a href="#Body">Confira abaixo <FontAwesomeIcon className='Heart-Card mx-2' icon={faAngleDoubleDown} color="#ffee00" size="1x"></FontAwesomeIcon></a> 
                    </div>
                </Col>
            </Row>

            <CardBody posts={posts} />

        </Container>
    );
}

export default Body;
