import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom'

const NavComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" >
        {/*  <NavbarBrand><Link to="/">Cultiv</Link></NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto mx-auto" navbar >
            <NavItem>
              <NavLink ><Link to="/">Home</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/Login">Login</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink ><Link to="/">Archive</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink ><Link to="/">Books</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink ><Link to="/">About</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink ><Link to="/">Contact</Link></NavLink>
            </NavItem>

          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavComponent;
