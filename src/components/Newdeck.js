import React from 'react';
import axios from 'axios';
import Header from './Header';
import { Link } from 'react-router-dom';
 
class Newdeck extends React.Component {
  state = {
    _id: '',
    jugador: '',
    habilidad: '',
    arquetipo: '',
    arquetipo_image: '',
    engine: '',
    top: '',
    puesto: '',
    date: '',
    mainuno: '',
    maindos: '',
    maintres: '',
    maincuatro: '',
    maincinco: '',
    mainseis: '',
    mainsiete: '',
    mainocho: '',
    mainnueve: '',
    maindiez: '',
    mainonce: '',
    maindoce: '',
    maintrece: '',
    maincatorce: '',
    mainquince: '',
    maindieciseis: '',
    maindiecisiete: '',
    maindieciocho: '',
    maindiecinueve: '',
    mainveinte: '',
    mainveintiuno: '',
    mainveintidos: '',
    mainveintitres: '',
    mainveinticuatro: '',
    mainveinticinco: '',
    mainveintiseis: '',
    mainveintisiete: '',
    mainveintiocho: '',
    mainveintinueve: '',
    maintreinta: '',
    extrauno: '',
    extrados: '',
    extratres: '',
    extracuatro: '',
    extracinco: '',
    extraseis: '',
    extrasiete: '',
    extraocho: '',
    extranueve: '',
    extradiez: '',
    sideuno: '',
    sidedos: '',
    sidetres: '',
    sidecuatro: '',
    sidecinco: '',
    sideseis: '',
    sidesiete: '',
    sideocho: '',
    sidenueve: '',
    sidediez: '',
    contacts: []
  }
 
  componentDidMount() {
    const url = 'https://dlpro-backend.herokuapp.com/decks/'
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ contacts: data })
      console.log(this.state.contacts)
     })
  }
 

  handleFormSubmit( event ) {
    event.preventDefault();

    const data_to_send = {
      _id: this.state._id,
      jugador: this.state.jugador,
      habilidad: this.state.habilidad,
      arquetipo: this.state.arquetipo,
      arquetipo_image: this.state.arquetipo_image,
      engine: this.state.engine,
      top: this.state.top,
      puesto: this.state.puesto,
      date: this.date,
      mainuno: this.state.mainuno,
      maindos: this.state.maindos,
      maintres: this.state.maintres,
      maincuatro: this.state.maincuatro,
      maincinco: this.state.maincinco,
      mainseis: this.state.mainseis,
      mainsiete: this.state.mainsiete,
      mainocho: this.state.mainocho,
      mainnueve: this.state.mainnueve,
      maindiez: this.state.maindiez,
      mainonce: this.state.mainonce,
      maindoce: this.state.maindoce,
      maintrece: this.state.maintrece,
      maincatorce: this.state.maincatorce,
      mainquince: this.state.mainquince,
      maindieciseis: this.state.maindieciseis,
      maindiecisiete: this.state.maindiecisiete,
      maindieciocho: this.state.maindieciocho,
      maindiecinueve: this.state.maindiecinueve,
      mainveinte: this.state.mainveinte,
      mainveintiuno: this.state.mainveintiuno,
      mainveintidos: this.state.mainveintidos,
      mainveintitres: this.state.mainveintitres,
      mainveinticuatro: this.state.mainveinticuatro,
      mainveinticinco: this.state.mainveinticinco,
      mainveintiseis: this.state.mainveintiseis,
      mainveintisiete: this.state.mainveintisiete,
      mainveintiocho: this.state.mainveintiocho,
      mainveintinueve: this.state.mainveintinueve,
      maintreinta: this.state.maintreinta,
    }

    axios.post('https://dlpro-backend.herokuapp.com/decks/', data_to_send)
    .then(function (response) {
      //handle success
      console.log(response)
      alert('Deck creado');
    })
    .catch(function (response) {
        //handle error
        console.log(response)
    });
}


 
  render() {
    return (
      <div className="container">
        <Header />
        <h1 className="h1margen">Creador de Decks</h1>
        <div className='row'>
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Jugador</label>
                <input type="text" name="jugador" className="form-control" value={this.state.jugador} onChange={e => this.setState({ jugador: e.target.value })}/>
 
                <label>Habilidad</label>
                <input type="text" name="habilidad" className="form-control" value={this.state.habilidad} onChange={e => this.setState({ habilidad: e.target.value })}/>
 
                <label>Arquetipo</label>
                <input type="text" name="arquetipo" className="form-control" value={this.state.arquetipo} onChange={e => this.setState({ arquetipo: e.target.value })}/>
 
                <label>Imagen del arquetipo</label>
                <input type="text" name="arquetipo_image" className="form-control" value={this.state.arquetipo_image} onChange={e => this.setState({ arquetipo_image: e.target.value })}/>
 
                <label>Engine</label>
                <input type="text" name="engine" className="form-control" value={this.state.engine} onChange={e => this.setState({ engine: e.target.value })}/>
                <br/>

            </form>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Top</label>
                <input type="text" name="top" className="form-control" value={this.state.top} onChange={e => this.setState({ top: e.target.value })}/>
 
                <label>Puesto</label>
                <input type="text" name="puesto" className="form-control" value={this.state.puesto} onChange={e => this.setState({ puesto: e.target.value })}/>
 
                <label>Fecha</label>
                <input type="date" name="fecha" className="form-control" value={this.state.fecha} onChange={e => this.setState({ fecha: e.target.value })}/>
 
                <label>Main 1</label>
                <input type="text" name="mainuno" className="form-control" value={this.state.mainuno} onChange={e => this.setState({ mainuno: e.target.value })}/>
 
                <label>Main 2</label>
                <input type="text" name="maindos" className="form-control" value={this.state.maindos} onChange={e => this.setState({ maindos: e.target.value })}/>
                <br/>

            </form>
                </div>
            </div>
        </div>
        
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Main 3</label>
                <input type="text" name="maintres" className="form-control" value={this.state.maintres} onChange={e => this.setState({ maintres: e.target.value })}/>
 
                <label>Main 4</label>
                <input type="text" name="maincuatro" className="form-control" value={this.state.maincuatro} onChange={e => this.setState({ maincuatro: e.target.value })}/>
 
                <label>Main 5</label>
                <input type="text" name="maincinco" className="form-control" value={this.state.maincinco} onChange={e => this.setState({ maincinco: e.target.value })}/>
 
                <label>Main 6</label>
                <input type="text" name="mainseis" className="form-control" value={this.state.mainseis} onChange={e => this.setState({ mainseis: e.target.value })}/>
 
                <label>Main 7</label>
                <input type="text" name="mainsiete" className="form-control" value={this.state.mainsiete} onChange={e => this.setState({ mainsiete: e.target.value })}/>
                <br/>

            </form>
                </div>
            </div>
        </div>

        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Main 8</label>
                <input type="text" name="mainocho" className="form-control" value={this.state.mainocho} onChange={e => this.setState({ mainocho: e.target.value })}/>
 
                <label>Main 9</label>
                <input type="text" name="mainnueve" className="form-control" value={this.state.mainnueve} onChange={e => this.setState({ mainnueve: e.target.value })}/>
 
                <label>Main 10</label>
                <input type="text" name="maindiez" className="form-control" value={this.state.maindiez} onChange={e => this.setState({ maindiez: e.target.value })}/>
 
                <label>Main 11</label>
                <input type="text" name="mainonce" className="form-control" value={this.state.mainonce} onChange={e => this.setState({ mainonce: e.target.value })}/>
 
                <label>Main 12</label>
                <input type="text" name="maindoce" className="form-control" value={this.state.maindoce} onChange={e => this.setState({ maindoce: e.target.value })}/>
                <br/>
      
            </form>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Main 13</label>
                <input type="text" name="maintrece" className="form-control" value={this.state.maintrece} onChange={e => this.setState({ maintrece: e.target.value })}/>
 
                <label>Main 14</label>
                <input type="text" name="maincatorce" className="form-control" value={this.state.maincatorce} onChange={e => this.setState({ maincatorce: e.target.value })}/>
 
                <label>Main 15</label>
                <input type="text" name="mainquince" className="form-control" value={this.state.mainquince} onChange={e => this.setState({ mainquince: e.target.value })}/>
 
                <label>Main 16</label>
                <input type="text" name="maindieciseis" className="form-control" value={this.state.maindieciseis} onChange={e => this.setState({ maindieciseis: e.target.value })}/>
 
                <label>Main 17</label>
                <input type="text" name="maindiecisiete" className="form-control" value={this.state.maindiecisiete} onChange={e => this.setState({ maindiecisiete: e.target.value })}/>
                <br/>
      
            </form>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Main 18</label>
                <input type="text" name="maindieciocho" className="form-control" value={this.state.maindieciocho} onChange={e => this.setState({ maindieciocho: e.target.value })}/>
 
                <label>Main 19</label>
                <input type="text" name="maindiecinueve" className="form-control" value={this.state.maindiecinueve} onChange={e => this.setState({ maindiecinueve: e.target.value })}/>
 
                <label>Main 20</label>
                <input type="text" name="mainveinte" className="form-control" value={this.state.mainveinte} onChange={e => this.setState({ mainveinte: e.target.value })}/>
 
                <label>Main 21</label>
                <input type="text" name="mainveintiuno" className="form-control" value={this.state.mainveintiuno} onChange={e => this.setState({ mainveintiuno: e.target.value })}/>
 
                <label>Main 22</label>
                <input type="text" name="mainveintidos" className="form-control" value={this.state.mainveintidos} onChange={e => this.setState({ mainveintidos: e.target.value })}/>
                <br/>
      
            </form>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Main 23</label>
                <input type="text" name="mainveintitres" className="form-control" value={this.state.mainveintitres} onChange={e => this.setState({ mainveintitres: e.target.value })}/>
 
                <label>Main 24</label>
                <input type="text" name="mainveinticuatro" className="form-control" value={this.state.mainveinticuatro} onChange={e => this.setState({ mainveinticuatro: e.target.value })}/>
 
                <label>Main 25</label>
                <input type="text" name="arquetipo" className="form-control" value={this.state.mainveinticinco} onChange={e => this.setState({ mainveinticinco: e.target.value })}/>
 
                <label>Main 26</label>
                <input type="text" name="mainveintiseis" className="form-control" value={this.state.mainveintiseis} onChange={e => this.setState({ mainveintiseis: e.target.value })}/>
 
                <label>Main 27</label>
                <input type="text" name="mainveintisiete" className="form-control" value={this.state.mainveintisiete} onChange={e => this.setState({ mainveintisiete: e.target.value })}/>
                <br/>
      
            </form>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Main 28</label>
                <input type="text" name="mainveintiocho" className="form-control" value={this.state.mainveintiocho} onChange={e => this.setState({ mainveintiocho: e.target.value })}/>
 
                <label>Main 29</label>
                <input type="text" name="mainveintinueve" className="form-control" value={this.state.mainveintinueve} onChange={e => this.setState({ mainveintinueve: e.target.value })}/>
 
                <label>Main 30</label>
                <input type="text" name="maintreinta" className="form-control" value={this.state.maintreinta} onChange={e => this.setState({ maintreinta: e.target.value })}/>
 
                <label>Extra 1</label>
                <input type="text" name="extrauno" className="form-control" value={this.state.extrauno} onChange={e => this.setState({ extrauno: e.target.value })}/>
 
                <label>Extra 2</label>
                <input type="text" name="extrados" className="form-control" value={this.state.extrados} onChange={e => this.setState({ extrados: e.target.value })}/>
                <br/>
      
            </form>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Extra 3</label>
                <input type="text" name="extratres" className="form-control" value={this.state.extratres} onChange={e => this.setState({ extratres: e.target.value })}/>
 
                <label>Extra 4</label>
                <input type="text" name="extracuatro" className="form-control" value={this.state.extracuatro} onChange={e => this.setState({ extracuatro: e.target.value })}/>
 
                <label>Extra 5</label>
                <input type="text" name="extracinco" className="form-control" value={this.state.extracinco} onChange={e => this.setState({ extracinco: e.target.value })}/>
 
                <label>Extra 6</label>
                <input type="text" name="extraseis" className="form-control" value={this.state.extraseis} onChange={e => this.setState({ extraseis: e.target.value })}/>
 
                <label>Extra 7</label>
                <input type="text" name="extrasiete" className="form-control" value={this.state.extrasiete} onChange={e => this.setState({ extrasiete: e.target.value })}/>
                <br/>
      
            </form>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Extra 8</label>
                <input type="text" name="extraocho" className="form-control" value={this.state.extraocho} onChange={e => this.setState({ extraocho: e.target.value })}/>
 
                <label>Extra 9</label>
                <input type="text" name="extranueve" className="form-control" value={this.state.extranueve} onChange={e => this.setState({ extranueve: e.target.value })}/>
 
                <label>Extra 10</label>
                <input type="text" name="extradiez" className="form-control" value={this.state.extradiez} onChange={e => this.setState({ extradiez: e.target.value })}/>
 
                <label>Extra 11</label>
                <input type="text" name="extraonce" className="form-control" value={this.state.extraonce} onChange={e => this.setState({ extraonce: e.target.value })}/>
 
                <label>Extra 12</label>
                <input type="text" name="extradoce" className="form-control" value={this.state.extradoce} onChange={e => this.setState({ extradoce: e.target.value })}/>
                <br/>
      
            </form>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Side 1</label>
                <input type="text" name="sideuno" className="form-control" value={this.state.sideuno} onChange={e => this.setState({ sideuno: e.target.value })}/>
 
                <label>Side 2</label>
                <input type="text" name="sidedos" className="form-control" value={this.state.sidedos} onChange={e => this.setState({ sidedos: e.target.value })}/>
 
                <label>Side 3</label>
                <input type="text" name="sidetres" className="form-control" value={this.state.sidetres} onChange={e => this.setState({ sidetres: e.target.value })}/>
 
                <label>Side 4</label>
                <input type="text" name="sidecuatro" className="form-control" value={this.state.sidecuatro} onChange={e => this.setState({ sidecuatro: e.target.value })}/>
 
                <label>Side 5</label>
                <input type="text" name="sidecinco" className="form-control" value={this.state.sidecinco} onChange={e => this.setState({ sidecinco: e.target.value })}/>
                <br/>
      
            </form>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Side 6</label>
                <input type="text" name="sideseis" className="form-control" value={this.state.sideseis} onChange={e => this.setState({ sideseis: e.target.value })}/>
 
                <label>Side 7</label>
                <input type="text" name="sidesiete" className="form-control" value={this.state.sidesiete} onChange={e => this.setState({ sidesiete: e.target.value })}/>
 
                <label>Side 8</label>
                <input type="text" name="sideocho" className="form-control" value={this.state.sideocho} onChange={e => this.setState({ sideocho: e.target.value })}/>
 
                <label>Side 9</label>
                <input type="text" name="sidenueve" className="form-control" value={this.state.sidenueve} onChange={e => this.setState({ sidenueve: e.target.value })}/>
 
                <label>Side 10</label>
                <input type="text" name="sidediez" className="form-control" value={this.state.sidediez} onChange={e => this.setState({ sidediez: e.target.value })}/>
                <br/>
      
            </form>
                </div>
            </div>
        </div>
        
        </div> 
        <input type="submit" className="btn btn-primary btn-block" onClick={e => this.handleFormSubmit(e)} value="Crear deck" />
        <div className="col-md-12">  
        <h3>Lista de Decks</h3>
        <table className="table table-bordered table-striped">
        <thead>  
        <tr>
            <th>Deck</th>
            <th>Habilidad</th>
            <th>Arquetipo</th>
            <th>Imagen</th>
            <th>Engine</th>     
        </tr>
        </thead>
        <tbody>
        {this.state.contacts.map((contact, index) => (
        <tr key={index._id}>

            <td> <Link to={`/decks/${contact._id}`} > { contact.jugador } </Link> </td>
            <td>{ contact.habilidad }</td>
            <td>{ contact.arquetipo }</td>
            <td>{ contact.arquetipo_image }</td>
            <td>{ contact.engine }</td>

        </tr>
        ))}
        </tbody>
        </table>
         </div>  
 
        </div>
    );
  }
}
export default Newdeck;