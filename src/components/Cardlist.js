import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'
import { Pagination } from './Pagination.js'



export default function Cardlist() {



  const [cardList, setCardList] = useState([])
  const [search, setSearch ] = useState("")
  const [recordForEdit, setrecordForEdit ] = useState("")
  const [loading, setLoading ] = useState (false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage,] = useState(20)

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
  const imageCard = data =>(

   // <div className='card' onClick={()=>{showRecordDetails(data)}} >
   <div className='card'>
      <div><img src={data.rareza} className='rareza'></img></div>
  <div> <img src={data.image.secure_url} className='card-img-top' sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"></img> </div>
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

  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-dark" width='100%' >
    <div className="container-fluid">
      <a className="navbar-brand" href="#" > <img src='./img/DLP.png' height='125' ></img> </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a to={"/cartas"}className="nav-link" href="#"></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" to={"/add"}></a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input  value={search} onChange={searcher} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-light" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
  <br />
    
    <div className='row'>
        <div className='col-md-4'> <Card 
                        addOrEdit={addOrEdit}
                       // recordForEdit={recordForEdit}
                                                /> 
        </div>
        <div className='col-md-8'>
           <table> 
              <tbody>
                {
                  //tr > 3 td
                  [...Array(Math.ceil(currentPost.length/ 5))].map((e,i)=>
                  <tr key={i} >
                    <td> {imageCard(currentPost[5 * i ])} </td>
                    <td> {currentPost[5 * i + 1] ? imageCard(currentPost[5 * i + 1]) : null} </td>
                    <td> {currentPost[5 * i + 2] ? imageCard(currentPost[5 * i + 2]) : null} </td>
                    <td> {currentPost[5 * i + 3] ? imageCard(currentPost[5 * i + 3]) : null} </td>
                    <td> {currentPost[5 * i + 4] ? imageCard(currentPost[5 * i + 4]) : null} </td>


                  </tr>

                  )
                }
              </tbody>
           </table>
           <br />
           <Pagination  postPerPage={postPerPage} totalPost={results.length} paginate={paginate} />
            </div>
            
        </div>

        

        </div>
  )
}