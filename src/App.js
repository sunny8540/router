import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import { HashRouter as Router } from 'react-router-dom'; 
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
