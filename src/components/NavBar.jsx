import React from 'react'
import '../styted/NavBar.css'
import{Link} from "react-router-dom"
import CartWidget from "./Cartwidget"


const NavBar = () => {
  return (
   <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-fluid">
       
      <a className="navbar-brand" href="../"><img className="logo" src="https://res.cloudinary.com/claudioluxt/image/upload/v1662652524/imagen/logo-original-removebg-preview_twfpze.png" alt="logo"></img></a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"> 
              <Link className="nav1" to="category/2">Tag</Link>
              </li>
              <li className="nav-item">
              <Link className="nav1" to="category/1">Book</Link>
              </li>
              <li className="nav-item">
              <Link className="nav1" to="category/3">Stickers</Link>
              </li>
              
              <CartWidget />             
              <li className="nav-item2">
                <a className="nav2" href="./armados.html"><b>Login</b></a>
              </li>
              <li className="nav-item2">
                <a className="nav2" href="./tablas.html"><b>Registrarse</b></a>
              </li>
            </ul>
            
          </div>
          
          
      </div>
      
    </nav>      
   </>
  )
}

export default NavBar