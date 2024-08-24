import './App.css';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { About } from './pages/About';
import { Home } from './pages/Home';



function App() {
return (
  <div className="App">
    <Header />
    <Home />
    <Projects />
    <About />
    <Blog />
    <Contact />
    <Footer />
  </div>
);
}

export default App;
