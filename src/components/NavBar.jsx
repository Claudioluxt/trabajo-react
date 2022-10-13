import React from 'react'
import '../styted/NavBar.css'
import{Link} from "react-router-dom"
import CartWidget from "./Cartwidget"
import  Navbar from 'react-bootstrap/Navbar'
import  Container  from 'react-bootstrap/Container'
import  Nav  from 'react-bootstrap/Nav'





const NavBar = () => {
  return (
    <>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="../">
            <img
              alt="logo megumi"
              src="https://res.cloudinary.com/claudioluxt/image/upload/v1662652524/imagen/logo-original-removebg-preview_twfpze.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           MEGUMI
          </Navbar.Brand>
        </Container>
        <Container className='Boton'>
          <Nav className="justify-content-center">
            <form className="form-inline">
              <button className="btn btn-sn btn-outline-secondary" type="button"><Link to="category/2">Tag</Link></button>
              <button className="btn btn-sn btn-outline-secondary" type="button"><Link to="category/1">Book</Link></button>
              <button className="btn btn-sn btn-outline-secondary" type="button"><Link to="category/3">Stickers</Link></button>
            </form>
          </Nav>
          <Nav className='justify-content-end'>
          <form className="form-inline">
              <button className="btn btn-sn btn-outline-secondary" type="button">ingresar</button>
              <button className="btn btn-sn btn-outline-secondary" type="button">Login</button>
              
            </form>
          </Nav>
        </Container>
        <CartWidget />
        </Navbar>         
   </>
  )
}

export default NavBar