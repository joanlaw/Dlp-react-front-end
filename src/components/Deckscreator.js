import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Deckscreator() {

  //
  console.log(useParams()); 

  const {_id} = useParams()
  console.log(_id);


//ESTADO DE CARTAS
  const [ deckuno, setDeckuno ] = useState ([])
  const [ deckdos, setDeckdos ] = useState([])
  const [ decktres, setDecktres ] = useState([])
  const [ deckcuatro, setDeckcuatro ] = useState([])
  const [ deckcinco, setDeckcinco ] = useState([])
  const [ deckseis, setDeckseis ] = useState([])
  const [ decksiete, setDecksiete ] = useState([])
  const [ deckocho, setDeckocho ] = useState([])
  const [ decknueve, setDecknueve ] = useState([])
  const [ deckdiez, setDeckdiez ] = useState([])
  const [ deckonce, setDeckonce ] = useState([])
  const [ deckdoce, setDeckdoce ] = useState([])
  const [ decktrece, setDecktrece ] = useState([])
  const [ deckcatorce, setDeckcatorce ] = useState([])
  const [ deckquince, setDeckquince ] = useState([])
  const [ deckdieciseis, setDeckdieciseis ] = useState([])
  const [ deckdiecisiete, setDeckdiecisiete ] = useState([])
  const [ deckdieciocho, setDeckdieciocho ] = useState([])
  const [ deckdiecinueve, setDeckdiecinueve ] = useState([])
  const [ deckveinte, setDeckveinte ] = useState([])

  useEffect (()=>{
    const obtenerDeck = async ()=>{

     // const cartaid = 
      const url = `https://dlpro-backend.herokuapp.com/decks/${_id}`;
      const result = await axios.get(url);

      console.log(result.data);
      setDeckuno(result.data);
      setDeckdos(result.data)
      setDecktres(result.data)
      setDeckcuatro(result.data)
      setDeckcinco(result.data)
      setDeckseis(result.data)
      setDecksiete(result.data)
      setDeckocho(result.data)
      setDecknueve(result.data)
      setDeckdiez(result.data)
      setDeckonce(result.data)
      setDeckdoce(result.data)
      setDecktrece(result.data)
      setDeckcatorce(result.data)
      setDeckquince(result.data)
      setDeckdieciseis(result.data)
      setDeckdiecisiete(result.data)
      setDeckdieciocho(result.data)
      setDeckdiecinueve(result.data)
      setDeckveinte(result.data)
    }

    obtenerDeck()

    

  },[_id]);


  //CARTA UNO
  const [mainuno, setMainuno] = useState([])
  const [ cartauno, setCartauno] = useState([])
  //SEGUNDA CARTA
  const [maindos, setMaindos] = useState([])
  const [ cartados, setCartados] = useState([])

  //TERCERA CARTA
  const [maintres, setMaintres] = useState([])
  const [ cartatres, setCartatres] = useState([])

  //CUARTA CARTA

  const [maincuatro, setMaincuatro] = useState([])
  const [ cartacuatro, setCartacuatro] = useState([])

  //QUINTA CARTA

  const [maincinco, setMaincinco] = useState([])
  const [ cartacinco, setCartacinco] = useState([])

  //SEXTA CARTA

  const [mainseis, setMainseis] = useState([])
  const [ cartaseis, setCartaseis] = useState([])

  //SEPTIMA CARTA

  const [mainsiete, setMainsiete] = useState([])
  const [ cartasiete, setCartasiete] = useState([])


  //OCTAVA CARTA

  const [mainocho, setMainocho] = useState([])
  const [ cartaocho, setCartaocho] = useState([])

  //NOVENA CARTA

  const [mainnueve, setMainnueve] = useState([])
  const [ cartanueve, setCartanueve] = useState([])

  //DECIMA CARTA

  const [maindiez, setMaindiez] = useState([])
  const [ cartadiez, setCartadiez] = useState([])

  //CARTA ONCE

  const [mainonce, setMainonce] = useState([])
  const [ cartaonce, setCartaonce] = useState([])

  //CARTA DOCE

  const [maindoce, setMaindoce] = useState([])
  const [ cartadoce, setCartadoce] = useState([])

  //CARTA TRECE

  const [maintrece, setMaintrece] = useState([])
  const [ cartatrece, setCartatrece] = useState([])

  //CARTA CATORCE

  const [maincatorce, setMaincatorce] = useState([])
  const [ cartacatorce, setCartacatorce] = useState([])

  //CARTA QUINCE

  const [mainquince, setMainquince] = useState([])
  const [ cartaquince, setCartaquince] = useState([])

  //CARTA DIECISEIS

  const [maindieciseis, setMaindieciseis] = useState([])
  const [ cartadieciseis, setCartadieciseis] = useState([])

  //CARTA DIECISIETE

  const [maindiecisiete, setMaindiecisiete] = useState([])
  const [ cartadiecisiete, setCartadiecisiete] = useState([])

  //CARTA DIECIOCHO

  const [maindieciocho, setMaindieciocho] = useState([])
  const [ cartadieciocho, setCartadieciocho] = useState([])

  //CARTA DIECINUEVE

  const [maindiecinueve, setMaindiecinueve] = useState([])
  const [ cartadiecinueve, setCartadiecinueve] = useState([])

  //CARTA VEINTE

  const [mainveinte, setMainveinte] = useState([])
  const [ cartaveinte, setCartaveinte] = useState([])

  //
  
  useEffect (()=>{
    const obtenerDatos = async ()=>{

     // const cartaid = 
      const urlmainuno = `https://dlpro-backend.herokuapp.com/cartas/${deckuno.mainuno}`;
      const urlmaindos = `https://dlpro-backend.herokuapp.com/cartas/${deckdos.maindos}`;
      const urlmaintres = `https://dlpro-backend.herokuapp.com/cartas/${decktres.maintres}`;
      const urlmaincuatro = `https://dlpro-backend.herokuapp.com/cartas/${deckcuatro.maincuatro}`;
      const urlmaincinco = `https://dlpro-backend.herokuapp.com/cartas/${deckcinco.maincinco}`;
      const urlmainseis = `https://dlpro-backend.herokuapp.com/cartas/${deckseis.mainseis}`;
      const urlmainsiete = `https://dlpro-backend.herokuapp.com/cartas/${decksiete.mainsiete}`;
      const urlmainocho = `https://dlpro-backend.herokuapp.com/cartas/${deckocho.mainocho}`;
      const urlmainnueve = `https://dlpro-backend.herokuapp.com/cartas/${decknueve.mainnueve}`;
      const urlmaindiez = `https://dlpro-backend.herokuapp.com/cartas/${deckdiez.maindiez}`;
      //DIEZ URL
      const urlmainonce = `https://dlpro-backend.herokuapp.com/cartas/${deckonce.mainonce}`;
      const urlmaindoce = `https://dlpro-backend.herokuapp.com/cartas/${deckdoce.maindoce}`;
      const urlmaintrce = `https://dlpro-backend.herokuapp.com/cartas/${decktrece.maintrece}`;
      const urlmaincatorce = `https://dlpro-backend.herokuapp.com/cartas/${deckcatorce.maincatorce}`;
      const urlmainquince = `https://dlpro-backend.herokuapp.com/cartas/${deckquince.mainquince}`;
      const urlmaindieciseis = `https://dlpro-backend.herokuapp.com/cartas/${deckdieciseis.maindieciseis}`;
      const urlmaindiecisiete = `https://dlpro-backend.herokuapp.com/cartas/${deckdiecisiete.maindiecisiete}`;
      const urlmaindieciocho = `https://dlpro-backend.herokuapp.com/cartas/${deckdieciocho.maindieciocho}`;
      const urlmaindiecinueve = `https://dlpro-backend.herokuapp.com/cartas/${deckdiecinueve.maindiecinueve}`;
      const urlmainveinte = `https://dlpro-backend.herokuapp.com/cartas/${deckveinte.mainveinte}`;
      //
      const resultmainuno = await axios.get(urlmainuno); 
      const resultmaindos = await axios.get(urlmaindos);
      const resultmaintres = await axios.get(urlmaintres);
      const resultadomaincuatro = await axios.get(urlmaincuatro);
      const resultadomaincinco = await axios.get(urlmaincinco);
      const resultadomainseis = await axios.get(urlmainseis);
      const resultadomainsiete = await axios.get(urlmainsiete);
      const resultadomainocho = await axios.get(urlmainocho);
      const resultadomainnueve = await axios.get(urlmainnueve);
      const resultadomaindiez = await axios.get(urlmaindiez);
      // RESULTADOS 10
      const resultadomainonce = await axios.get(urlmainonce);
      const resultadomaindoce = await axios.get(urlmaindoce);
      const resultadomaintrece = await axios.get(urlmaintrce);
      const resultadomaincatorce = await axios.get(urlmaincatorce);
      const resultadomainquince = await axios.get(urlmainquince);
      const resultadomaindieciseis = await axios.get(urlmaindieciseis);
      const resultadomaindiecisiete = await axios.get(urlmaindiecisiete);
      const resultadomaindieciocho = await axios.get(urlmaindieciocho);
      const resultadomaindiecinueve = await axios.get(urlmaindiecinueve);
      const resultadomainveinte = await axios.get(urlmainveinte);

     // console.log(resultmainuno.data);
      setMainuno(resultmainuno.data);
      setCartauno(resultmainuno.data.image);
      //
      setMaindos(resultmaindos.data)
      setCartados(resultmaindos.data.image)
      //
      setMaintres(resultmaintres.data)
      setCartatres(resultmaintres.data.image)
      //
      setMaincuatro(resultadomaincuatro.data)
      setCartacuatro(resultadomaincuatro.data.image)
      //
      setMaincinco(resultadomaincinco.data)
      setCartacinco(resultadomaincinco.data.image)
      //
      setMainseis(resultadomainseis.data)
      setCartaseis(resultadomainseis.data.image)
      //
      setMainsiete(resultadomainseis.data)
      setCartasiete(resultadomainsiete.data.image)
      //
      setMainocho(resultadomainocho.data)
      setCartaocho(resultadomainocho.data.image)
      //
      setMainnueve(resultadomainnueve.data)
      setCartanueve(resultadomainnueve.data.image)
      //
      setMaindiez(resultadomaindiez.data)
      setCartadiez(resultadomaindiez.data.image)
      // DIEZ RESULTADOS

      setMainonce(resultadomainonce.data)
      setCartaonce(resultadomainonce.data.image)
      //
      setMaindoce(resultadomaindoce.data)
      setCartadoce(resultadomaindoce.data.image)
      //
      setMaintrece(resultadomaintrece.data)
      setCartatrece(resultadomaintrece.data.image)
      //
      setMaincatorce(resultadomaincatorce.data)
      setCartacatorce(resultadomaincatorce.data.image)
      //
      setMainquince(resultadomainquince.data)
      setCartaquince(resultadomainquince.data.image)
      //
      setMaindieciseis(resultadomaindieciseis.data)
      setCartadieciseis(resultadomaindieciseis.data.image)
      //
      setMaindiecisiete(resultadomaindiecisiete.data)
      setCartadiecisiete(resultadomaindiecisiete.data.image)
      //
      setMaindieciocho(resultadomaindieciocho.data)
      setCartadieciocho(resultadomaindieciocho.data.image)
      //
      setMaindiecinueve(resultadomaindiecinueve.data)
      setCartadiecinueve(resultadomaindiecinueve.data.image)
      //
      setMainveinte(resultadomainveinte.data)
      setCartaveinte(resultadomainveinte.data.image)
    }

    obtenerDatos()

    

  },[deckuno.mainuno, deckdos.maindos, decktres.maintres, deckcuatro.maincuatro, deckcinco.maincinco, deckseis.mainseis, decksiete.mainsiete, deckocho.mainocho, decknueve.mainnueve, deckdiez.maindiez,
    deckonce.mainonce, deckdoce.maindoce, decktrece.maintrece, deckcatorce.maincatorce, deckquince.mainquince, deckdieciseis.maindieciseis, deckdiecisiete.setMaindiecisiete, deckdieciocho.maindieciocho,
  deckdiecinueve.maindiecinueve, deckveinte.mainveinte]);






  const navigate = useNavigate()



  return (
    <div className='searchmargen' >
        <Header />
        <button className='btn btn-primary  '  onClick={() => navigate(-1)}>Atrás</button> 
        <h1>{deckuno.arquetipo}</h1>
        <h2>{deckuno.top}</h2>
        <div className='deck-grid'>
          <div className='container-item item1'><img src={mainuno.rareza}  className='rareza' alt='rareza' ></img> <img src={mainuno.limitacion}  className='limitacion'  ></img> <Link  to={`/cartas/${mainuno._id}/${mainuno.nombre}/`} > <img src={cartauno.secure_url} className='cartatop2 item1' alt={mainuno.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw" ></img> </Link> </div>
          <div className='container-item item2' ><img src={maindos.rareza}  className='rareza' alt='rareza' ></img><img src={maindos.limitacion}  className='limitacion'  ></img> <img src={cartados.secure_url} className='cartatop2' alt={maindos.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item3' ><img src={maintres.rareza}  className='rareza' alt='rareza' ></img><img src={maintres.limitacion}  className='limitacion'  ></img> <img src={cartatres.secure_url} className='cartatop2' alt={maintres.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item4'><img src={maincuatro.rareza}  className='rareza' alt='rareza' ></img><img src={maincuatro.limitacion}  className='limitacion'  ></img><img src={cartacuatro.secure_url} className='cartatop2' alt={maincuatro.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item5' ><img src={maincinco.rareza}  className='rareza' alt='rareza' ></img><img src={maincinco.limitacion}  className='limitacion'  ></img><img src={cartacinco.secure_url} className='cartatop2' alt={maincinco.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item6' ><img src={mainseis.rareza}  className='rareza' alt='rareza' ></img><img src={mainseis.limitacion}  className='limitacion'  ></img><img src={cartaseis.secure_url} className='cartatop2' alt={mainseis.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item7' ><img src={mainsiete.rareza}  className='rareza' alt='rareza' ></img><img src={mainsiete.limitacion}  className='limitacion'  ></img><img src={cartasiete.secure_url} className='cartatop2' alt={mainsiete.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item7' ><img src={mainocho.rareza}  className='rareza' alt='rareza' ></img><img src={mainocho.limitacion}  className='limitacion'  ></img><img src={cartaocho.secure_url} className='cartatop2' alt={mainocho.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item7' ><img src={mainnueve.rareza}  className='rareza' alt='rareza' ></img><img src={mainnueve.limitacion}  className='limitacion'  ></img><img src={cartanueve.secure_url} className='cartatop2' alt={mainnueve.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item7' ><img src={maindiez.rareza}  className='rareza' alt='rareza' ></img><img src={maindiez.limitacion}  className='limitacion'  ></img><img src={cartadiez.secure_url} className='cartatop2' alt={maindiez.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>

          <div className='container-item item7' ><img src={mainonce.rareza}  className='rareza' alt='rareza' ></img><img src={mainonce.limitacion}  className='limitacion'  ></img><img src={cartaonce.secure_url} className='cartatop2' alt={mainonce.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item7' ><img src={maindoce.rareza}  className='rareza' alt='rareza' ></img><img src={maindoce.limitacion}  className='limitacion'  ></img><img src={cartadoce.secure_url} className='cartatop2' alt={maindoce.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item7' ><img src={maintrece.rareza}  className='rareza' alt='rareza' ></img><img src={maintrece.limitacion}  className='limitacion'  ></img><img src={cartatrece.secure_url} className='cartatop2' alt={maintrece.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item7' ><img src={maincatorce.rareza}  className='rareza' alt='rareza' ></img><img src={maincatorce.limitacion}  className='limitacion'  ></img><img src={cartacatorce.secure_url} className='cartatop2' alt={maincatorce.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item7' ><img src={mainquince.rareza}  className='rareza' alt='rareza' ></img><img src={mainquince.limitacion}  className='limitacion'  ></img><img src={cartaquince.secure_url} className='cartatop2' alt={mainquince.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item7' ><img src={maindieciseis.rareza}  className='rareza' alt='rareza' ></img><img src={maindieciseis.limitacion}  className='limitacion'  ></img><img src={cartadieciseis.secure_url} className='cartatop2' alt={maindieciseis.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item7' ><img src={maindiecisiete.rareza}  className='rareza' alt='rareza' ></img><img src={maindiecisiete.limitacion}  className='limitacion'  ></img><img src={cartadiecisiete.secure_url} className='cartatop2' alt={maindiecisiete.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item7' ><img src={maindieciocho.rareza}  className='rareza' alt='rareza' ></img><img src={maindieciocho.limitacion}  className='limitacion'  ></img><img src={cartadieciocho.secure_url} className='cartatop2' alt={maindieciocho.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item7' ><img src={maindiecinueve.rareza}  className='rareza' alt='rareza' ></img><img src={maindiecinueve.limitacion}  className='limitacion'  ></img><img src={cartadiecinueve.secure_url} className='cartatop2' alt={maindiecinueve.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item7' ><img src={mainveinte.rareza}  className='rareza' alt='rareza' ></img><img src={mainveinte.limitacion}  className='limitacion'  ></img><img src={cartaveinte.secure_url} className='cartatop2' alt={mainveinte.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
        </div>
        
    </div>
  )
}

export default Deckscreator