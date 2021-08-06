import React from 'react';
import './NavBar.scss';
import { Navbar, Nav, Container } from 'react-bootstrap';


import BtnOrcamento from './BtnOrcamento';

const NavBar = () => {
  return (
    <Navbar bg="transparent" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand className='NavbarBrand' href="#home">Gustavo Kamitani</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />    
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-link">            
            <Nav.Link href="#Body" className='Link-Nav'>Projetos</Nav.Link>
            <Nav.Link href="#Contact" className='Link-Nav'>Contatos</Nav.Link>
          </Nav>
          <Nav className="mb-auto mt-2">
            <BtnOrcamento ><a href='https://mywhats.net/gustavokamitani'  target="_blank"><span>Orçamento</span></a></BtnOrcamento>
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;