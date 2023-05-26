import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
import Catalog from './components/pages/Catalog';
import Contact from './components/pages/Contact';


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/catalog' element={<Catalog />}></Route>
          <Route path='/contact' element={<Contact />}></Route> 
          {/* <Route path='/empresa' element={<Empresa />}></Route>
          */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
