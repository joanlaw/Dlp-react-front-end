import './App.css';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom"
import Cardlist from './components/Cardlist';
import Home from './components/Home';
import Allcards from './components/Allcards';
import Cardinfo from './components/Cardinfo';
import { Pagination } from './components/Pagination';
import Decksmeta from './components/Decksmeta';
import Prueba from './components/decks/Prueba';
import Deckscreator from './components/Deckscreator';
import Creadordecks from './components/Creadordecks';
import Deckslist from './components/Deckslist';
import FormEmployee from './components/Newdeck';
import Newdeck from './components/Newdeck';
import Salamangrande from './components/decks/Salamangrande.js';
import Tooltips from './components/Tooltips';

function App() {
  return (
    <div className='container' >

      <Routes>
      <Route  path='/cartas/:_id/:nombre'  element={<Cardinfo />} />
      <Route  path='/decks/:_id' element={<Deckscreator />} />
        <Route  path='/' element={<Home />} />
        
        <Route  path='/cartas' element={<Allcards />} />
        <Route  path='/decks-meta' element={<Decksmeta />} />
        <Route  path='/crear-deck' element={<Newdeck />} />
        <Route  path='/decks-meta/prueba' element={<Prueba />} />
        <Route  path='/agregar' element={<Cardlist />} />
        <Route  path='/agregar/:!#' element={<Pagination />} />
        <Route  path='/tooltip' element={<Tooltips />} />
        
        


        
      </Routes>

    </div>
  );
}

export default App;
