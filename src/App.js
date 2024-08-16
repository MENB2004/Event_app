import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Faq from './components/Faq';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/faq" element={<Faq/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
