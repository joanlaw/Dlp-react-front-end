import './App.css';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom"
import Cardlist from './components/Cardlist';
import Home from './components/Home';

function App() {
  return (
    <div className='container' >
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/cartas' element={<Cardlist />} />
      </Routes>

    </div>
  );
}

export default App;
