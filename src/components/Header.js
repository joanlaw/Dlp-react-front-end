import React from "react";

function Header() {

    return(
<header id='header' className='fixed-top' >
<div className='container d-flex align-items-center' >
<a className="navbar-brand" href="#" > <img src='./img/ico-d01.png' ></img> </a>  
<nav className='nav-menu d-none d-lg-block' >
<ul>
  <li className='active' href='#' >Inicio</li>
  <li href='#' >Lista de cartas</li>
  <li href='#' >Habilidades</li>
  <li href='#' >Ban list</li>
  <li href='#' >Tier List</li>
  <li href='#' >Decks de la comunidad</li>
</ul>

</nav>
</div>

</header>
    )
    
}

export default Header;

