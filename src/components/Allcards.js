import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Card from './Card'
import axios from 'axios'
import { Pagination } from './Pagination.js'
import Header from './Header.js'
import Cardlist from './Cardlist'
import { render } from '@testing-library/react'
import ReactTooltip from 'react-tooltip'
import Tooltips from './Tooltips'
import { Tooltip } from 'bootstrap'
import Footer from './Footer'


export default function Allcards() {


    const [cardList, setCardList] = useState([])
    const [search, setSearch ] = useState("")
    const [recordForEdit, setrecordForEdit ] = useState("")
    const [loading, setLoading ] = useState (false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage,] = useState(100)
  
    useEffect(()=>{
      refreshCardList();
    },[])
  
    const cardsApi = (url = 'https://dlpro-backend.herokuapp.com/cartas/') => {
      return {
          fetchAll: () => axios.get(url),
          create: newRecord => axios.post(url, newRecord),
          update: (id, updatedRecord) => axios.put(url  + id, updatedRecord),
          delete: id => axios.delete(url + id)
      }
    } 
    
    
  
      //Funcion de búsqueda
  
      const searcher = (e) => {
        setSearch(e.target.value)
        //console.log(e.target.value);
      }
    
    //metodo de filtrado 1
    
   // let results = []
   // if (!search) {
   //   results = cardList
  //  } else {
  //    results = cardList.filter( (dato) => 
  //    dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()))
  //  }
  
  //Metodo filtrado 2
  
  const results = !search ? cardList : cardList.filter((data)=> data.nombre.toLowerCase().includes(search.toLowerCase()) )
  
  //const results = search? Cardlist : cardList.filter((dato)=>dato.nombre.toLowerCase().includes(search?.toLowerCase()))
  
  //const results = !search ? cardList : cardList.filter((dato)=> dato.nombre.toLowerCase().includes(search?.toLocaleLowerCase()))
  
    
  
    function refreshCardList(){
      cardsApi().fetchAll()
      .then(res=> setCardList(res.data) )
      .catch(err => console.log(err))
    }
     
    const addOrEdit = (formData, onSuccess) => {
    //  if (FormData.get('_id') == "0")
      cardsApi().create(formData)
      .then(res => {
          onSuccess();
          refreshCardList();
      })
      .catch(err => console.log(err))
   //   else
  //    cardsApi().update(FormData.get('_id'),FormData)
   //   .then(res => {
    //      onSuccess();
    //      refreshCardList();
    //  })
     // .catch(err => console.log(err))
  
  
    }  
  
  //  const showRecordDetails = data => {
  //  setrecordForEdit(data)
  //  }
  
    //Solicitar a la api los datos de cartas para mostrar
    
    const ImageCard = ({data})  =>
    

    (
    
 

     <div className='cartalist'>
        <div><img src={data.rareza} className='rareza'></img></div>
        <div><img src={data.limitacion} className='limitacion'></img></div>
    <div> <img src={data.image.secure_url} className='cartatop'  sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"  alt={data.nombre} ></img> </div>
     </div>
 
    )
  
  
      //Solicitar a la api datos funcion para limitacion
  
  //    function imageCard(data){
   //     const imageCard = data()
   //     return (
  //    <div className='card'>
  //     <div><img src={data.rareza} className='rareza'  ></img></div>
   //    <img src={data.image.secure_url} className='card-img-top' height='200px' max-width='121.41px' ></img>
   //   </div>
   //     )
   // }
  
      // Mostrar numero de cartas actual en el post
      const indexOfLastPost = currentPage * postPerPage
      const indexOfFirstPost = indexOfLastPost - postPerPage
      const currentPost = results.slice(indexOfFirstPost, indexOfLastPost)
  
      //Cambio de pagina
  
      const paginate = pageNumber => setCurrentPage(pageNumber)
  

return(

    <div>
    <Header />

    <input  value={search} onChange={searcher} className="mb-2 form-control searchmargen " type="search" placeholder="Buscar Carta" aria-label="Search" />
     
       <div className='listcards'  >

       {currentPost.map((element)=>(
       <Link to={`/cartas/${element._id}/${element.nombre}/`} >
           <ImageCard data={element}/>
       </Link>
   ))}

         
           </div>
           
           <br />
         <Pagination  postPerPage={postPerPage} totalPost={results.length} paginate={paginate} />

        <div className='' ></div>
         <Footer />
       </div>
       

)
}