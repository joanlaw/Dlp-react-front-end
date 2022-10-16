import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from './Footer'
//import { isVisible } from '@testing-library/user-event/dist/utils'

import "./deckscreator.css";

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
  //
  const [ deckveintiuno, setDeckveintiuno ] = useState('')
  const [ deckveintidos, setDeckveintidos ] = useState([])
  const [ deckveintitres, setDeckveintitres ] = useState([])
  const [ deckveinticuatro, setDdeckveinticuatro ] = useState([])
  const [ deckveinticinco, setDdeckveinticinco ] = useState([])
  const [ deckveintiseis, setDeckveintiseis ] = useState([])
  const [ deckveintisiete, setDeckveintisiete ] = useState([])
  const [ deckveintiocho, setDeckveintiocho ] = useState([])
  const [ deckveinitinueve, setDeckveintinueve ] = useState([])
  const [ decktreinta, setDecktreinta ] = useState('')

  //COMIENZA EL EXTRA DECK

  const [ deckextrauno, setDeckextrauno ] = useState('')
  const [ deckextrados, setDeckextrados ] = useState([])
  const [ deckextratres, setDeckextratres ] = useState([])
  const [ deckextracuatro, setDeckextracuatro ] = useState([])
  const [ deckextracinco, setDeckextracinco ] = useState([])
  const [ deckextraseis, setDeckextraseis ] = useState([])
  const [ deckextrasiete, setDeckextrasiete ] = useState([])
  const [ deckextraocho, setDeckextraocho ] = useState([])
 // const [ extranueve, setExtranueve ] = useState([])
 // const [ extradiez, setExtradiez ] = useState([])  */
  


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
      //
      setDeckveintiuno(result.data)
     setDeckveintidos(result.data)
      setDeckveintitres(result.data)
       setDdeckveinticuatro(result.data)
      setDdeckveinticinco(result.data)
      setDeckveintiseis(result.data)
      setDeckveintisiete(result.data)
      setDeckveintiocho(result.data)
      setDeckveintinueve(result.data)
      setDecktreinta(result.data)
      
      //

      //COMIENZA EL EXTRA DECK

      setDeckextrauno(result.data)
      setDeckextrados(result.data)
      setDeckextratres(result.data)
      setDeckextracuatro(result.data)
      setDeckextracinco(result.data)
      setDeckextraseis(result.data)
      setDeckextrasiete(result.data)
      setDeckextraocho(result.data)
   //   setExtranueve(result.data)
   //   setExtradiez(result.data)   */

    }

    obtenerDeck()

    

  },[_id]);


  //CARTA 1
  const [mainuno, setMainuno] = useState([])
  const [ cartauno, setCartauno] = useState([])
  //SEGUNDA 2
  const [maindos, setMaindos] = useState([])
  const [ cartados, setCartados] = useState([])

  //TERCERA 3
  const [maintres, setMaintres] = useState([])
  const [ cartatres, setCartatres] = useState([])

  //CUARTA 4

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

  //CARTA 21
  const [mainveintiuno, setMainveintiuno] = useState([])
  const [ cartaveintiuno, setCartaveintiuno] = useState(false)

  //CARTA 22
  const [mainveintidos, setMainveintidos] = useState([])
  const [ cartaveintidos, setCartaveintidos] = useState([])

  //CARTA 23
  const [mainveintitres, setMainveintitres] = useState([])
  const [ cartaveintitres, setCartaveintitres] = useState([])

  //CARTA 24
  const [mainveinticuatro, setMainveinticuatro] = useState([])
  const [ cartaveinticuatro, setCartaveinticuatro] = useState([])

  //CARTA25
  const [mainveinticinco, setMainveinticinco] = useState([])
  const [ cartaveinticinco, setCartaveinticinco] = useState([])

  //CARTA26
  const [mainveintiseis, setMainveintiseis] = useState([])
  const [ cartaveintiseis, setCartaveintiseis] = useState([])

  //CARTA27
  const [mainveintisiete, setMainveintisiete] = useState([])
  const [ cartaveintisiete, setCartaveintisiete] = useState([])

  //CARTA 28
  const [mainveintiocho, setMainveintiocho] = useState([])
  const [ cartaveintiocho, setCartaveintiocho] = useState([])

  //CARTA 29
  const [mainveintinueve, setMainveintinueve] = useState([])
  const [ cartaveintinueve, setCartaveintinueve] = useState([])

  //CARTA 30
  const [maintreinta, setMaintreinta] = useState([])
  const [ cartatreinta, setCartatreinta] = useState([]) 

 //EXTRA 1
  const [extrauno, setExtrauno] = useState([])
  const [cartaextrauno, setCartaextrauno] = useState([]) 

   // EXTRA 2
  const [extrados, setExtrados] = useState([])
  const [cartaextrados, setCartaextrados] = useState([]) 

  //EXTRA 3
  const [extratres, setExtratres] = useState([])
  const [cartaextratres, setCartaextratres] = useState([]) 

  //EXTRA 4
  const [extracuatro, setExtracuatro] = useState([])
  const [cartaextracuatro, setCartaextracuatro] = useState([]) 

  //EXTRA 5
  const [extracinco, setExtracinco] = useState([])
  const [cartaextracinco, setCartaextracinco] = useState([]) 

  //EXTRA 6
  const [extraseis, setExtraseis] = useState([])
  const [cartaextraseis, setCartaextraseis] = useState([]) 

  //EXTRA 7
  const [extrasiete, setExtrasiete] = useState([])
  const [cartaextrasiete, setCartaextrasiete] = useState([]) 

  //8
  const [extraocho, setExtraocho] = useState([])
  const [cartaextraocho, setCartaextraocho] = useState([]) 

  //9
//  const [extranuevepos, setExtranuevepos] = useState([])
//  const [cartaextranueve, setCartaextranueve] = useState([]) 

  //10
 // const [extradiezpos, setExtradiezpos] = useState([])
//  const [cartaextradiez, setCartaextradiez] = useState([])  */
 
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
      //VEINTE URL
      const urlmainveintiuno = `https://dlpro-backend.herokuapp.com/cartas/${deckveintiuno.mainveintiuno}`;
      const urlmainveintidos = `https://dlpro-backend.herokuapp.com/cartas/${deckveintidos.mainveintidos}`;
      const urlmainveintitres = `https://dlpro-backend.herokuapp.com/cartas/${deckveintitres.mainveintitres}`;
        const urlmainveinticuatro = `https://dlpro-backend.herokuapp.com/cartas/${deckveinticuatro.mainveinticuatro}`;
      const urlmainveinticinco = `https://dlpro-backend.herokuapp.com/cartas/${deckveinticinco.mainveinticinco}`;
       const urlmainveintiseis = `https://dlpro-backend.herokuapp.com/cartas/${deckveintiseis.mainveintiseis}`;
      const urlmainveintisiete = `https://dlpro-backend.herokuapp.com/cartas/${deckveintisiete.mainveintisiete}`;
      const urlmainveintiocho = `https://dlpro-backend.herokuapp.com/cartas/${deckveintiocho.mainveintiocho}`;
      const urlmainveintinueve = `https://dlpro-backend.herokuapp.com/cartas/${deckveinitinueve.mainveintinueve}`;
      const urlmaintreinta = `https://dlpro-backend.herokuapp.com/cartas/${decktreinta.maintreinta}`;
      
      //COMIENZAN URL DE EXTRA DECK

      const urlextrauno = `https://dlpro-backend.herokuapp.com/cartas/${deckextrauno.extrauno}`;
      const urlextrados = `https://dlpro-backend.herokuapp.com/cartas/${deckextrados.extrados}`;
      const urlextratres = `https://dlpro-backend.herokuapp.com/cartas/${deckextratres.extratres}`;
      const urlextracuatro = `https://dlpro-backend.herokuapp.com/cartas/${deckextracuatro.extracuatro}`;
      const urlextracinco = `https://dlpro-backend.herokuapp.com/cartas/${deckextracinco.extracinco}`;
      const urlextraseis = `https://dlpro-backend.herokuapp.com/cartas/${deckextraseis.extraseis}`;
      const urlextrasiete = `https://dlpro-backend.herokuapp.com/cartas/${deckextrasiete.extrasiete}`;
      const urlextraocho = `https://dlpro-backend.herokuapp.com/cartas/${deckextraocho.extraocho}`;
    //  const urlextranueve = `https://dlpro-backend.herokuapp.com/cartas/${extranueve.extranuevepos}`;
    //  const urlextradiez = `https://dlpro-backend.herokuapp.com/cartas/${extradiez.extradiezpos}`;   */

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
      //RESULTADOS 20
      const resultadomainveintiuno = await axios.get(urlmainveintiuno);
      const resultadomainveintidos = await axios.get(urlmainveintidos);
      const resultadomainveintitres = await axios.get(urlmainveintitres);
    const resultadomainveinticuatro = await axios.get(urlmainveinticuatro);
      const resultadomainveinticinco = await axios.get(urlmainveinticinco);
        const resultadomainveintiseis = await axios.get(urlmainveintiseis);
      const resultadomainveintisiete = await axios.get(urlmainveintisiete);
      const resultadomainveintiocho = await axios.get(urlmainveintiocho);
      const resultadomainveintinueve = await axios.get(urlmainveintinueve);
      const resultadomaintreinta = await axios.get(urlmaintreinta); 


      //COMIENZAN RESULTADOS EXTRA DECK
       const resultadoextrauno = await axios.get(urlextrauno); 
       const resultadoextrados = await axios.get(urlextrados); 
      const resultadoextratres = await axios.get(urlextratres); 
      const resultadoextracuatro = await axios.get(urlextracuatro); 
      const resultadoextracinco = await axios.get(urlextracinco); 
      const resultadoextraseis = await axios.get(urlextraseis); 
      const resultadoextrasiete = await axios.get(urlextrasiete); 
      const resultadoextraocho = await axios.get(urlextraocho); 
    //  const resultadoextranueve = await axios.get(urlextranueve); 
    //  const resultadoextradiez = await axios.get(urlextradiez);   */

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
      setMainsiete(resultadomainsiete.data)
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

      //20 RESULTADOS
      setMainveintiuno(resultadomainveintiuno.data)
      setCartaveintiuno(resultadomainveintiuno.data.image)

      //21
      setMainveintidos(resultadomainveintidos.data)
      setCartaveintidos(resultadomainveintidos.data.image)

      //23
      setMainveintitres(resultadomainveintitres.data)
      setCartaveintitres(resultadomainveintitres.data.image)

      //24
      setMainveinticuatro(resultadomainveinticuatro.data)
      setCartaveinticuatro(resultadomainveinticuatro.data.image)

      //25
      setMainveinticinco(resultadomainveinticinco.data)
      setCartaveinticinco(resultadomainveinticinco.data.image)

    //26
      setMainveintiseis(resultadomainveintiseis.data)
      setCartaveintiseis(resultadomainveintiseis.data.image)

      //27
      setMainveintisiete(resultadomainveintisiete.data)
      setCartaveintisiete(resultadomainveintisiete.data.image)

      //28
      setMainveintiocho(resultadomainveintiocho.data)
      setCartaveintiocho(resultadomainveintiocho.data.image)

      //29
      setMainveintinueve(resultadomainveintinueve.data)
      setCartaveintinueve(resultadomainveintinueve.data.image)

      //30
      setMaintreinta(resultadomaintreinta.data)
      setCartatreinta(resultadomaintreinta.data.image) 

      //COMIENZA EXTRA DECK 1
      setExtrauno(resultadoextrauno.data)
      setCartaextrauno(resultadoextrauno.data.image) 

      //2
      setExtrados(resultadoextrados.data)
      setCartaextrados(resultadoextrados.data.image) 

      //3
      setExtratres(resultadoextratres.data)
      setCartaextratres(resultadoextratres.data.image) 

      //4
      setExtracuatro(resultadoextracuatro.data)
      setCartaextracuatro(resultadoextracuatro.data.image) 

      //5
      setExtracinco(resultadoextracinco.data)
      setCartaextracinco(resultadoextracinco.data.image) 

      //6
      setExtraseis(resultadoextraseis.data)
      setCartaextraseis(resultadoextraseis.data.image) 

      //7
      setExtrasiete(resultadoextrasiete.data)
      setCartaextrasiete(resultadoextrasiete.data.image) 

      //8
      setExtraocho(resultadoextraocho.data)
      setCartaextraocho(resultadoextraocho.data.image)  



    }

    obtenerDatos()

    

  },[deckuno.mainuno, deckdos.maindos, decktres.maintres, deckcuatro.maincuatro, deckcinco.maincinco, deckseis.mainseis, decksiete.mainsiete, deckocho.mainocho, decknueve.mainnueve, deckdiez.maindiez,
    deckonce.mainonce, deckdoce.maindoce, decktrece.maintrece, deckcatorce.maincatorce, deckquince.mainquince, deckdieciseis.maindieciseis, deckdiecisiete.maindiecisiete, deckdieciocho.maindieciocho,
  deckdiecinueve.maindiecinueve, deckveinte.mainveinte, deckveintiuno.mainveintiuno, deckveintidos.mainveintidos, deckveintitres.mainveintitres, deckveinticuatro.mainveinticuatro, deckveinticinco.mainveinticinco, 
  deckveintiseis.mainveintiseis, deckveintisiete.mainveintisiete, deckveintiocho.mainveintiocho, deckveinitinueve.mainveintinueve, decktreinta.maintreinta, deckextrauno.extrauno, deckextrados.extrados,
  deckextratres.extratres, deckextracuatro.extracuatro, deckextracinco.extracinco, deckextraseis.extraseis, deckextrasiete.extrasiete, deckextraocho.extraocho ]);






  const navigate = useNavigate()

// const divtreinta = useState (decktreinta)

  return (


    <div className='box-grid' >
        <Header />
        <button className='btn btn-primary button-grid '  onClick={() => navigate(-1)}>Atrás</button> 
        <h1>{deckuno.arquetipo}</h1>
        <h2>{deckuno.top}</h2>
        <div className='deck-grid'>
          <div className='container-item item1'><img src={mainuno.rareza}  className='rareza'  ></img> <img src={mainuno.limitacion}  className='limitacion'  ></img> <Link  to={`/cartas/${mainuno._id}/${mainuno.nombre}/`} > <img src={cartauno.secure_url} className='cartatop2 item1' alt={mainuno.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw" ></img> </Link> </div>
          <div className='container-item item2' ><img src={maindos.rareza}  className='rareza'  ></img><img src={maindos.limitacion}  className='limitacion'  ></img> <img src={cartados.secure_url} className='cartatop2' alt={maindos.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item3' ><img src={maintres.rareza}  className='rareza'  ></img><img src={maintres.limitacion}  className='limitacion'  ></img> <img src={cartatres.secure_url} className='cartatop2' alt={maintres.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item4'><img src={maincuatro.rareza}  className='rareza' ></img><img src={maincuatro.limitacion}  className='limitacion'  ></img><img src={cartacuatro.secure_url} className='cartatop2' alt={maincuatro.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item5' ><img src={maincinco.rareza}  className='rareza'  ></img><img src={maincinco.limitacion}  className='limitacion'  ></img><img src={cartacinco.secure_url} className='cartatop2' alt={maincinco.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item6' ><img src={mainseis.rareza}  className='rareza'  ></img><img src={mainseis.limitacion}  className='limitacion'  ></img><img src={cartaseis.secure_url} className='cartatop2' alt={mainseis.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item7' ><img src={mainsiete.rareza}  className='rareza'  ></img><img src={mainsiete.limitacion}  className='limitacion'  ></img><img src={cartasiete.secure_url} className='cartatop2' alt={mainsiete.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item8' ><img src={mainocho.rareza}  className='rareza'  ></img><img src={mainocho.limitacion}  className='limitacion'  ></img><img src={cartaocho.secure_url} className='cartatop2' alt={mainocho.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item9' ><img src={mainnueve.rareza}  className='rareza'  ></img><img src={mainnueve.limitacion}  className='limitacion'  ></img><img src={cartanueve.secure_url} className='cartatop2' alt={mainnueve.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item10' ><img src={maindiez.rareza}  className='rareza' ></img><img src={maindiez.limitacion}  className='limitacion'  ></img><img src={cartadiez.secure_url} className='cartatop2' alt={maindiez.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>

          <div className='container-item item11' ><img src={mainonce.rareza}  className='rareza'  ></img><img src={mainonce.limitacion}  className='limitacion'  ></img><img src={cartaonce.secure_url} className='cartatop2' alt={mainonce.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item12' ><img src={maindoce.rareza}  className='rareza'  ></img><img src={maindoce.limitacion}  className='limitacion'  ></img><img src={cartadoce.secure_url} className='cartatop2' alt={maindoce.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item13' ><img src={maintrece.rareza}  className='rareza'  ></img><img src={maintrece.limitacion}  className='limitacion'  ></img><img src={cartatrece.secure_url} className='cartatop2' alt={maintrece.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item14' ><img src={maincatorce.rareza}  className='rareza'  ></img><img src={maincatorce.limitacion}  className='limitacion'  ></img><img src={cartacatorce.secure_url} className='cartatop2' alt={maincatorce.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item15' ><img src={mainquince.rareza}  className='rareza'  ></img><img src={mainquince.limitacion}  className='limitacion'  ></img><img src={cartaquince.secure_url} className='cartatop2' alt={mainquince.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item16' ><img src={maindieciseis.rareza}  className='rareza'  ></img><img src={maindieciseis.limitacion}  className='limitacion'  ></img><img src={cartadieciseis.secure_url} className='cartatop2' alt={maindieciseis.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item17' ><img src={maindiecisiete.rareza}  className='rareza' ></img><img src={maindiecisiete.limitacion}  className='limitacion'  ></img><img src={cartadiecisiete.secure_url} className='cartatop2' alt={maindiecisiete.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item18' ><img src={maindieciocho.rareza}  className='rareza'  ></img><img src={maindieciocho.limitacion}  className='limitacion'  ></img><img src={cartadieciocho.secure_url} className='cartatop2' alt={maindieciocho.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item18' ><img src={maindiecinueve.rareza}  className='rareza'  ></img><img src={maindiecinueve.limitacion}  className='limitacion'  ></img><img src={cartadiecinueve.secure_url} className='cartatop2' alt={maindiecinueve.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className='container-item item20' ><img src={mainveinte.rareza}  className='rareza' ></img><img src={mainveinte.limitacion}  className='limitacion'  ></img><img src={cartaveinte.secure_url} className='cartatop2' alt={mainveinte.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>

          <div className={ deckveintiuno.mainveintiuno === '' ? 'ocultar' : 'container-item item21'} > <img src={mainveintiuno.rareza}  className='rareza'  ></img><img src={mainveintiuno.limitacion}  className='limitacion'  ></img><Link  to={`/cartas/${mainveintiuno._id}/${mainveintiuno.nombre}/`} ><img src={ cartaveintiuno ?    cartaveintiuno.secure_url : null  } className='cartatop2' alt={mainveintiuno.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img></Link> </div>
          <div className={ deckveintidos.mainveintidos === '' ? 'ocultar' : 'container-item item22'} ><img src={mainveintidos.rareza}  className='rareza'  ></img><img src={mainveintidos.limitacion}  className='limitacion'  ></img><img src={  cartaveintidos ?  cartaveintidos.secure_url : null } className='cartatop2' alt={mainveintidos.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className={ deckveintitres.mainveintitres === '' ? 'ocultar' : 'container-item item23'} ><img src={mainveintitres.rareza}  className='rareza' ></img><img src={mainveintitres.limitacion}  className='limitacion'  ></img><img src={ cartaveintitres ?  cartaveintitres.secure_url : null} className='cartatop2' alt={mainveintitres.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className={ deckveinticuatro.mainveinticuatro === '' ? 'ocultar' : 'container-item item24'} ><img src={mainveinticuatro.rareza}  className='rareza'  ></img><img src={mainveinticuatro.limitacion}  className='limitacion'  ></img><img src={ cartaveinticuatro ? cartaveinticuatro.secure_url : null } className='cartatop2' alt={mainveinticuatro.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className={ deckveinticinco.mainveinticinco === '' ? 'ocultar' : 'container-item item25'} ><img src={mainveinticinco.rareza}  className='rareza'  ></img><img src={mainveinticinco.limitacion}  className='limitacion'  ></img><img src={ cartaveintiseis ? cartaveinticinco.secure_url : null } className='cartatop2' alt={mainveinticinco.nombre} sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  ></img> </div>
          <div className={ deckveintiseis.mainveintiseis === '' ? 'ocultar' : 'container-item item26'} ><img src={mainveintiseis.rareza}  className='rareza'  ></img><img src={mainveintiseis.limitacion}  className='limitacion'  ></img><img src={ cartaveintiseis && cartaveintiseis.secure_url  } className='cartatop2' alt={mainveintiseis.nombre}  ></img> </div>
          <div className={ deckveintisiete.mainveintisiete === '' ? 'ocultar' : 'container-item item27'} ><img src={mainveintisiete.rareza}  className='rareza'  ></img><img src={mainveintisiete.limitacion}  className='limitacion'  ></img><img src={ cartaveintisiete ? cartaveintisiete.secure_url : null } className='cartatop2' alt={mainveintisiete.nombre}   ></img> </div>
          <div className={ deckveintiocho.mainveintiocho === '' ? 'ocultar' :  'container-item item28'} ><img src={mainveintiocho.rareza}  className='rareza'  ></img><img src={mainveintiocho.limitacion}  className='limitacion'  ></img><img src={ cartaveintiocho && cartaveintiocho.secure_url  } className='cartatop2' alt={mainveintiocho.nombre}  ></img> </div>
          <div className={ deckveinitinueve.mainveintinueve === '' ? 'ocultar' :  'container-item item29'} ><img src={mainveintinueve.rareza}  className='rareza' ></img><img src={mainveintinueve.limitacion}  className='limitacion'  ></img><img src={ cartaveintinueve && cartaveintinueve.secure_url  } className='cartatop2' alt={mainveintinueve.nombre}   ></img> </div>
          <div className={ decktreinta.maintreinta === '' ? 'ocultar' : 'container-item item30' } ><img src={maintreinta.rareza}  className='rareza' ></img><img src={ maintreinta.limitacion}  className='limitacion'  ></img><img src={ cartatreinta && cartatreinta.secure_url } className={'cartatop2' }alt={maintreinta.nombre}  ></img> </div>

        </div>
        <span>Zona extra</span>
        <div className='extra-grid' >
        <div className={ deckextrauno.extrauno === '' ? 'ocultar' :'container-extra extra1' } ><img src={extrauno.rareza}  className='rareza' ></img><img src={ extrauno.limitacion}  className='limitacion'  ></img><img src={ cartaextrauno &&  cartaextrauno.secure_url } className={'cartatop2' }alt={extrauno.nombre}  ></img> </div>
        <div className={ deckextrados.extrados === '' ? 'ocultar' : 'container-extra extra2' } ><img src={extrados.rareza}  className='rareza' ></img><img src={ extrados.limitacion}  className='limitacion'  ></img><img src={ cartaextrados && cartaextrados.secure_url } className={'cartatop2' }alt={extrados.nombre}  ></img> </div>
        <div className={ deckextratres.extratres === '' ? 'ocultar' : 'container-extra extra3' } ><img src={extratres.rareza}  className='rareza' ></img><img src={ extratres.limitacion}  className='limitacion'  ></img><img src={ cartaextratres && cartaextratres.secure_url } className={'cartatop2' }alt={extratres.nombre}  ></img> </div>
        <div className={ deckextracuatro.extracuatro === '' ? 'ocultar' : 'container-extra extra4' } ><img src={extracuatro.rareza}  className='rareza' ></img><img src={ extracuatro.limitacion}  className='limitacion'  ></img><img src={ cartaextracuatro && cartaextracuatro.secure_url } className={'cartatop2' }alt={extracuatro.nombre}  ></img> </div>
        <div className={ deckextracinco.extracinco === '' ? 'ocultar' : 'container-extra extra5' } ><img src={extracinco.rareza}  className='rareza' ></img><img src={ extracinco.limitacion}  className='limitacion'  ></img><img src={ cartaextracinco && cartaextracinco.secure_url } className={'cartatop2' }alt={extracinco.nombre}  ></img> </div>
        <div className={ deckextraseis.extraseis === '' ? 'ocultar' : 'container-extra extra6' } ><img src={extraseis.rareza}  className='rareza' ></img><img src={ extraseis.limitacion}  className='limitacion'  ></img><img src={ cartaextraseis && cartaextraseis.secure_url } className={'cartatop2' }alt={extraseis.nombre}  ></img> </div>
        <div className={ deckextrasiete.extrasiete === '' ? 'ocultar' : 'container-extra extra7' } ><img src={extrasiete.rareza}  className='rareza' ></img><img src={ extrasiete.limitacion}  className='limitacion'  ></img><img src={ cartaextrasiete && cartaextrasiete.secure_url } className={'cartatop2' }alt={extrasiete.nombre}  ></img> </div>
        <div className={ deckextraocho.extraocho === '' ? 'ocultar' : 'container-extra extra8' } ><img src={extraocho.rareza}  className='rareza' ></img><img src={ extraocho.limitacion}  className='limitacion'  ></img><img src={ cartaextraocho && cartaextraocho.secure_url } className={'cartatop2' }alt={extraocho.nombre}  ></img> </div>
        </div>

        <h2> Lista de otros decks  </h2>

        <Footer />
        
    </div>
  )
}

export default Deckscreator