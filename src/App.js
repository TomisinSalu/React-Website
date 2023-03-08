import './App.scss';
import {Navbar} from './components/Navbar.js'
import {Landing} from './components/Landing.js'
import { Routes, Route, Link } from "react-router-dom";
import {About} from './components/About';
import {Portfolio} from './components/Portfolio';
import {Contact} from './components/Contact';
import {Apparel} from './components/Apparel';
import {Logos} from './components/Logos';
import {Posters} from './components/Posters';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/apparel" element={<Apparel />}/>
        <Route path="/logos" element={<Logos />}/>
        <Route path="/posters" element={<Posters />}/>


      </Routes>
    </div>
  );
}

export default App;
