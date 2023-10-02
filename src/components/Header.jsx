import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/oneclick-white-logo.png"
import HeaderContact from './ContactCard';

function Header() {
  return (
    <Navbar expand="lg" className=" header-bg   ">
      <Container >
        <Navbar.Brand href="#home"><img src={logo} style={{height:"4rem"}} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav" >
            <Nav.Link href="#home" className='head-text'>Home</Nav.Link>
            <NavDropdown className='head-text' title="Insurance" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Car Insurance</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.2">
                Bike Insurance
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.3">Health Insurance</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Travel Insurance 
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Life Insurance 
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact" className='head-text'>Contact US</Nav.Link>
            <Nav.Link href="#link " className='head-text'>FAQ</Nav.Link>

          <div className='phone'>
          <HeaderContact/>
          </div>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;