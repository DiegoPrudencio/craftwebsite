import logo from './logo.svg';
// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';

import Home from './pages/Home';

function App() {

  return (
    <div className="App">

      <Home />

      {/* <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/empresa' element={<Empresa />}></Route>
            <Route path='/contato' element={<Contato />}></Route>
        </Routes>
        <Footer />
      </Router> */}
    </div>
  );
}

export default App;
