import './App.css';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom"
import Cardlist from './components/Cardlist';
import Home from './components/Home';
import Allcards from './components/Allcards';

function App() {
  return (
    <div className='container' >

      <Routes>
      <Route  path='/cartas:_id'   />
        <Route  path='/' element={<Home />} />
        <Route  path='/cartas' element={<Allcards />} />
        <Route  path='/agregar' element={<Cardlist />} />
      </Routes>

    </div>
  );
}

export default App;
