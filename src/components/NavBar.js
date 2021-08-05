import React from 'react';
import './NavBar.scss';
import { Navbar, Nav, Container } from 'react-bootstrap';


import BtnOrcamento from './BtnOrcamento';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home">Gustavo Kamitani</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />        
          <Nav className="me-auto nav-link">            
            <Nav.Link href="#Body" className='Link-Nav'>Projetos</Nav.Link>
            <Nav.Link href="#Contact" className='Link-Nav'>Contato</Nav.Link>
          </Nav>
          <Nav className="mb-auto mt-2">
            <BtnOrcamento ><a href="" target="_blank"><span>Orçamento</span></a></BtnOrcamento>
          </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;