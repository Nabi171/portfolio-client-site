import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Projects from './components/Projects';
import { Routes, Route } from 'react-router';
import Footer from './components/Footer/Footer';
import Mainhome from './components/Manihome/Mainhome';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Mainhome />} />
        <Route path="/mainHome" element={<Mainhome />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

    </div>
  );
}

export default App;
