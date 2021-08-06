import React from 'react';
import './Footer.scss';

import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='Footer-Container'>
            <Container fluid>
                <Row>
                    <Col className='mx-5 Footer-1'>
                        <h1>Mais sobre nós</h1>
                        <p>Somos uma agência que criamos e desenvolvemos suas ideias para gerar resultados por meio de projetos personalizados para oferecer as melhores soluções para o seu negócio. </p>
                    </Col>
                    <Col>
                        <h1>Venha nos visitar</h1>
                        <p>Vamos converça sobre o seu projeto ou ideia e descobrir como podemos ajudar a sua empresa a crescer.</p>
                        <p>Rua Goanana 56, Vila Esperança</p>
                        <p>São Paulo - Brasil</p>
                        <p>CEP : 03646-020</p>
                    </Col>
                    <Col id='Location' className='location'>
                        <iframe width="100%" height="300" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Rua%20Goanana%2059%20S%C3%A3o%20Paulo+(Gustavo%20Kamitani)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href="https://maps-generator.com/pt"></a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=e3193119d6c5d2a7a4f7148b338f60a6dd10f0d3'></script>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='reserved'>
                            <p>© All Rights Reserved 2021</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;