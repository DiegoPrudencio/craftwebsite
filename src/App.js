// import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import Home from './pages/Home'
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import Navbar from './components/navBar/Navbar';


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
