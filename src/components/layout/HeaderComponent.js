import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarText,
  Nav
  
} from 'reactstrap';
import {Link} from 'react-router-dom'

const HeaderComponent = (props) => {


  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand><Link to="/"><h1>Cultiv</h1></Link></NavbarBrand>
        <Nav className="mr-auto" navbar>
          
          </Nav>
        <NavbarText style={{float:"right"}}>Mostafa Ibrahim</NavbarText>
       
      </Navbar>
    </div>
  );
}

export default HeaderComponent;
