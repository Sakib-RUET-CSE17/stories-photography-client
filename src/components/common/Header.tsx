import { UserContext } from 'App';
import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { ImCamera } from 'react-icons/im'
import { Link } from 'react-router-dom';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleLogOut = () => {
    sessionStorage.clear()
    setLoggedInUser({})
  }

  return (
    <div className='header__component'>
      <Navbar expand="lg" className='container'>
        <span className='font-weight-bolder d-flex'><Link to='/'>
          <h1><ImCamera className='mb-2' /> Stories</h1>
        </Link></span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto pr-5">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/orderList'>Dashboard</Link></li>
            <li><Link to='/manageOrders'>Admin</Link></li>
            <li><Link to='/offers'>Offers</Link></li>
            <li className='text-primary'>{loggedInUser.displayName}</li>
          </Nav>
          {
            loggedInUser.email ?
              < a href="/login"><button onClick={handleLogOut} className='btn btn-secondary'>Logout</button></a>
              :
              <Link to='/login'><Button variant="primary">Login</Button></Link>
          }
        </Navbar.Collapse>
      </Navbar >
    </div>
  );
};

export default Header;
