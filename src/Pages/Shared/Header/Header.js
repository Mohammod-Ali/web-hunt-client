import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaMouse, FaRegMoon, FaSun, FaUser } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { Image } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Switch from "react-switch";



const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  const [checked, setChecked] = useState(false);

const handleLogOut = () =>{
  logOut()
  .then(() => {})
  .catch(error => console.log(error))
}



const handleChange = nextChecked => {
  setChecked(nextChecked);
};

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/"><FaMouse className="me-2"></FaMouse> WEB-<span className="fw-bold">HUNT</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/courses">
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/faq">
              FAQ
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>
          </Nav>
          <Nav>
          
              {
                user?.uid ?
                <Button onClick={handleLogOut} variant="light">Log Out</Button>
                :
                <>
                <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
                <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
                </>
              }
           
            
            {
              user?.photoURL ? 
              <Image title={user?.displayName} style={{height: "45px", width: "45px"}} roundedCircle src={user?.photoURL}></Image>
              :
              <FaUser className="display-6"></FaUser>
            }
             <Switch onChange={handleChange} checked={checked} className="react-switch ms-2 mt-2" />
             <p className="ms-2 fs-3">{checked ? <FaSun></FaSun> : <FaRegMoon></FaRegMoon>}</p>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
