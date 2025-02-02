import logo from './logo.svg';
import './App.css';
import './component/navbar.css';
import Navbar from './component/Navbar.js';
import Hero from './component/Hero.js';
import '../src/component/couch.png'
import Crafted from './component/Crafted.js';
import Whyus from './component/Whyus.js';
import '../src/component/Whyus.js';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Navbar />
      <Hero title="Modern Interior Design Studio" description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique." />
      <Crafted />
      <Whyus />
      </div>
    </div>
  );
}

export default App;
