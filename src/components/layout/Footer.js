import React from 'react';
import {NavItem,NavLink, Nav,NavbarText,Navbar} from 'reactstrap'
import {Link} from 'react-router-dom'

function Footer() {

    return (
        <footer>
            <Navbar color="light" light expand="md" style={{margin:"auto"}}>

            <Nav  className="mr-auto" navbar>
             <NavItem>
              <NavLink ><Link to="/">Home</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink ><Link to="/">Archive</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink ><Link to="/">Books</Link></NavLink>
            </NavItem>
            
            </Nav>
            <NavbarText  >Mostafa Ibrahim</NavbarText>
            </Navbar>
         
            
        </footer>
    )
}
export default Footer