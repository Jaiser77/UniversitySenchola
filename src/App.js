import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import About from './Jaiser/About';
import Contact from './Jaiser/Contact';
import Navs from './Navs';
import Footer from './Footer';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navs/>

      <Routes>
      <Route path="/About" element={<About />}> </Route> 
      <Route path="/Contact" element={<Contact/>}> </Route> 
     
    

      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>

  );
}

export default App;
