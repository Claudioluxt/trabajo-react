import React from 'react';
import Nav from 'react-bootstrap/Nav';

export const Footer = () => {
  return (
   <>
        <hr />
   <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="../">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <p>Author: Claudio Gabriel Luxen Espinoza</p>
        <a href="luxengabriel@gmail.com">luxengabriel@example.com</a>
        </Nav.Item>
      </Nav>
      
      
   </>
 )
};
export default Footer