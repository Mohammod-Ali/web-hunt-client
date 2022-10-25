import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaMouse } from "react-icons/fa";


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><FaMouse className='me-2'></FaMouse>WEB-<span className='fw-bold'>HUNT</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Nav>
                {FaMouse}
              <Nav.Link to="/courses">Courses</Nav.Link>
              <Nav.Link to="/faq">FAQ</Nav.Link>
              <Nav.Link to="/blogs">Blogs</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;