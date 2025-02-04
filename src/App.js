import logo from './logo.svg';
import './App.css';
import './component/navbar.css';
import Navbar from './component/Navbar.js';
import Hero from './component/Hero.js';
import '../src/component/couch.png'
import Crafted from './component/Crafted.js';
import Whyus from './component/Whyus.js';
import '../src/component/Whyus.js';
import HelpU from './component/HelpU.js';
import SmallCards from './component/SmallCards.js';
import Testmintional from './component/Testmintional.js';

function App() {
  return (
    <div className="App">
      <div style={{width:"200%"}} className='container'>
      <Navbar />
      <Hero title="Modern Interior Design Studio" description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique." />
      <Crafted />
      <Whyus />
      <HelpU />
      <SmallCards />
      <Testmintional />
      </div>
    </div>
  );
}

export default App;
