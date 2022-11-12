import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function NavBar(props) {
    return (
        <Navbar bg="primary" variant="dark" className='mb-4'>
        
        <Container>
          <Navbar.Brand href="#home">WikiCountries</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    );
}

export default NavBar;