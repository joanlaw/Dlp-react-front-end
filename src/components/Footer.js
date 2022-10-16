import React from 'react'
import { Link } from 'react-router-dom'

import "./footer.css";

function Footer() {
  return (

            <footer className='pie-pagina'>
        <div className='grupo-1'>
            <div className='box'>
                <figure>
                    <Link to={""} >
                    <img src="https://res.cloudinary.com/dqofcbeaq/image/upload/v1665785399/iconos%20dlp/ico-d12_h2qmkg.png" alt="Logo Duel Links Pro" />
                    </Link>
                </figure>
            </div>
            <div className='box'>
                <h2>SOBRE NOSOTROS</h2>
                <p></p>
                <p></p>
            </div>
            <div className='box'>
                <h2>SÍGUENOS</h2>
                <div className='red-social'>
                    <a href="#" className='fa fa-facebook'></a>
                    <a href="#" className='fa fa-instagram'></a>
                    <a href="#" className='fa fa-twitter'></a>
                    <a href="#" className='fa fa-youtube'></a>
                    <a href="#" className='fa fa-youtube'></a>
                    <a href="#" className='fa fa-youtube'></a>

                </div>
            </div>
        </div>
        <div className='grupo-2'>
            <small>&copy; 2022 <b>Duel Links Pro</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>

  )
}

export default Footer