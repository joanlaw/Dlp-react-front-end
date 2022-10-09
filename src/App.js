import './App.css';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom"
import Cardlist from './components/Cardlist';
import Home from './components/Home';
import Allcards from './components/Allcards';
import Cardinfo from './components/Cardinfo';
import { Pagination } from './components/Pagination';

function App() {
  return (
    <div className='container' >

      <Routes>
      <Route  path='/cartas/:_id/:nombre'  element={<Cardinfo />} />
        <Route  path='/' element={<Home />} />
        
        <Route  path='/cartas' element={<Allcards />} />
        <Route  path='/agregar' element={<Cardlist />} />
        <Route  path='/agregar/:!#' element={<Pagination />} />
        
      </Routes>

    </div>
  );
}

export default App;
