import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../logo.png';

export default () => {
  return (
    <div>
      <header className='app-header navbar-purple'>
        <Navbar expand='md'>
          <Navbar.Brand className={'mr-5'} href='/'>
            <img className src={logo}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className={'ml-auto'}>
              <Nav.Link href='/'>Home</Nav.Link>
              <NavDropdown title="Marketing tools" id="basic-nav-dropdown">
                <NavDropdown.Item href="/buy-instagram-likes-sites">Buy instagramlikes</NavDropdown.Item>
                <NavDropdown.Item href="/buy-instagram-followers-sites">Buy instagram followers</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="free-instagram-likes-sites">Free instagram likes</NavDropdown.Item>
                <NavDropdown.Item href="free-instagram-followers-sites">Free instagram followers</NavDropdown.Item>
                <NavDropdown.Item href="free-instagram-views-sites">Free instagram views</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='/about'>About</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
              <Nav.Link className={'btn btn-pill buy-token'} href='/list'>List Your Service</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  );
};
