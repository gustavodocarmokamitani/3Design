import React from 'react';
import './CardBody.scss';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const CardBody = ({ posts }) => {
    return (
        <Row id='Body'>
            {posts &&
                posts.map(({ id, image, title, content, program, likes }) => (
                    <Col xs={6} lg={4} key={id}>
                        <div className='Body-Card'>
                            <img className='Card-Image' src={image}></img>
                            <div className='Hover-Card'>
                                <h3 className='Card-Title px-4 mt-2'>{title}</h3>
                                <p className='Card-Content px-4 mb-2'>{content}</p>
                            </div>                                                    
                            <p className='Programa-Card'> <FontAwesomeIcon className='Heart-Card' icon={faHeart} color="#ff0000" size="1x"></FontAwesomeIcon> <span>{likes}</span> <span>{program}</span></p>
                        </div>
                    </Col>
                ))}
        </Row>
    );
}

export default CardBody;