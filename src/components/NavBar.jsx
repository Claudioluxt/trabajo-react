import React from 'react'
import '../styted/NavBar.css'
import{Link} from "react-router-dom"
import CartWidget from "./Cartwidget"

const NavBar = () => {
  return (
   <>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div class="container-fluid">
       
      <a class="navbar-brand" href="../"><img class="logo" src="https://res.cloudinary.com/claudioluxt/image/upload/v1662652524/imagen/logo-original-removebg-preview_twfpze.png" alt="logo"></img></a>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item"> 
              <Link class="nav1" to="category/2">Tag</Link>
              </li>
              <li class="nav-item">
              <Link class="nav1" to="category/1">Book</Link>
              </li>
              <li class="nav-item">
              <Link class="nav1" to="category/3">Stickers</Link>
              </li>
              
              <CartWidget />4             
              <li class="nav-item2">
                <a class="nav2" href="./armados.html"><b>Login</b></a>
              </li>
              <li class="nav-item2">
                <a class="nav2" href="./tablas.html"><b>Registrarse</b></a>
              </li>
            </ul>
            
          </div>
          
          
      </div>
      
    </nav>      
   </>
  )
}

export default NavBar