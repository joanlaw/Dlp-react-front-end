import React from "react";
import Cardlist from "./Cardlist";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function Header() {

    return(
<header id='header' className='fixed-top' >
<div className='container d-flex align-items-center' >
<a className="navbar-brand" href="/" > <img src='./img/ico-d01.png' ></img> </a>  
<nav className='nav-menu d-none d-lg-block' >
<ul>
  <li className='active' href='#' ></li>
  <li> <Link to="cartas" >Cartas</Link></li>
  <li href='#' >HABILIDADES</li>
  <li href='#' >BAN LIST</li>
  <li href='#' >TIER LIST</li>
  <li href='#' >DECKS COMUNIDAD</li>
</ul>

</nav>


</div>

</header>

    )
    
}

export default Header;

