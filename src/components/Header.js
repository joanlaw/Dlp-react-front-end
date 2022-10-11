import React from "react";
import Cardlist from "./Cardlist";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function Header() {

    return(
<header id='header' className='fixed-top' >
<div className='container d-flex align-items-center' >
<Link to='/' className="navbar-brand"  > <img src='https://res.cloudinary.com/dqofcbeaq/image/upload/q_auto/v1663790369/iconos%20dlp/ico-d01_kui7ic.png' height="70" ></img> </Link>  
<nav className='nav-menu d-none d-lg-block' >
<ul>
  <li className='active' href='#' ></li>
  <li> <Link to="/cartas" >Cartas</Link></li>
  <li ><a href='/cartas'>HABILIDADES </a> </li>
  <li href='#' >BAN LIST</li>
  <li> <Link to="/decks-meta" >TIER LIST</Link></li>
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

