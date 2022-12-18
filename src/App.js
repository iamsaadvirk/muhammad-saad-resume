import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
        <Header />

        <main className='main'>
          <Home />
          <About />
          <Skills />
          <Qualification />
        </main>
    </div>
  );
}

export default App;
