import './App.scss';
import {Navbar} from './components/Navbar.js'
import {Landing} from './components/Landing.js'
import { Routes, Route, Link } from "react-router-dom";
import {About} from './components/About';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
