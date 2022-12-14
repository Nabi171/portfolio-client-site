import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Projects from './components/Projects';
import { Routes, Route } from 'react-router';
import Mainhome from './components/Manihome/Mainhome';
import Contact from './components/Contact/Contact';
import FullStackp from './components/FullStackp/FullStackp';
import Technologies from './components/Technologies/Technologies';
import FrontEnd from './components/FrontEnd/FrontEnd';
import Newsidebar from './components/Newsidebar/Newsidebar';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Newsidebar></Newsidebar>
      <Routes>
        <Route path="/" element={<Mainhome />} />
        <Route path="/mainHome" element={<Mainhome />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mern" element={<FullStackp />} />
        <Route path="/frontEnd" element={<FrontEnd />} />
        <Route path="/tech" element={<Technologies />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
