import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Home from './components/Home';
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='container'>
        <Home />
        <Projects></Projects>
      </div>
    </div>
  );
}

export default App;
