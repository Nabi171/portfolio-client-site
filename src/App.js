import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Projects from './components/Projects';
import { Routes, Route } from 'react-router';
import Mainhome from './components/Manihome/Mainhome';
import Contact from './components/Contact/Contact';
import FullStackp from './components/FullStackp/FullStackp';
import Technologies from './components/Technologies/Technologies';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Mainhome />} />
        <Route path="/mainHome" element={<Mainhome />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mern" element={<FullStackp />} />
        <Route path="/tech" element={<Technologies />} />
      </Routes>

    </div>
  );
}

export default App;
