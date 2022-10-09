import React from "react";
import Cardlist from "./Cardlist";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function Header() {

    return(
<header id='header' className='fixed-top' >
<div className='container d-flex align-items-center' >
<Link to='/' className="navbar-brand"  > <img src='./img/ico-d01.png' height="70" ></img> </Link>  
<nav className='nav-menu d-none d-lg-block' >
<ul>
  <li className='active' href='#' ></li>
  <li> <Link to="/cartas" >Cartas</Link></li>
  <li ><a href='/cartas'>HABILIDADES </a> </li>
  <li href='#' >BAN LIST</li>
  <li href='#' >TIER LIST</li>
  <li href='#' >DECKS COMUNIDAD</li>
  <li href='#' >NOTICIAS</li>
  <li> <Link to="/agregar" >AGREGAR CARTA</Link></li>
</ul>

</nav>


</div>

</header>

    )
    
}

export default Header;

