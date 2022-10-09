import React from 'react'
import { useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Header from './Header';
//import Allcards from './Allcards';
//import axios from 'axios'

const Cardinfo = () => {


    console.log(useParams()); 

   const {_id} = useParams()
   console.log(_id);


   const [cartas, setCartas] = React.useState([])
   const [ image, setImage] = React.useState([])
   
   
   React.useEffect(()=>{
    const obtenerDatos = async () => {
        const respuesta = await fetch(`https://dlpro-backend.herokuapp.com/cartas/${_id}`)
       // .then(response => response.json())
       // .then(data => console.log(data))
       // .catch(error => console.log(error))
       const carta = await respuesta.json()
        setCartas(carta)
        setImage(carta.image)
       }
       obtenerDatos()



   }, [_id])
const navigate = useNavigate()

  return (
    
    <div>
        <Header />

     <button className='btn btn-primary botonesmargen '  onClick={() => navigate(-1)}>Atrás</button>          
    <h1>{cartas.nombre}</h1> 
    <br />
    <div className='row' >


        <div className='col-md-10'>
            <div className='card'>
                <form className='card-body'>
                    <div className='form-group'>
                    <div className='form-group'>
                    <img src={cartas.rareza}  className='rarezainfo' alt='rareza' ></img>
                    <img src={image.secure_url} className='cartainfo' alt={cartas.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> 
                    </div>   
                        <img src={cartas.atributo_ico} className='atributo_info' ></img>
                        <img src={cartas.nivel_rango_ico} className='nivel_rareza_info'  ></img> <span>{cartas.nivel_rango}</span>
                        <br />
                        <br />
                        <span className='span_info'> [ {cartas.tipo} / {cartas.tipo_de_carta} ]  </span>
                        <br />
                        <span className='span_info' >{cartas.descripcion}</span>
                        <br />
                       ATK <span>{cartas.atk}</span> / DEF <span>{cartas.def}</span>
                       <br />
                       <span className='span_info'>¿Cómo obtener?</span>
                       <br />
                       <span className='span_info'>{cartas.caja}</span>
                    </div>
                </form>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Cardinfo