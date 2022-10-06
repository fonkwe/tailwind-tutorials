
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Herobottom from './components/Herobottom';
import NavBar from './components/NavBar';

function App() {
  return (
      <div>
        <NavBar />
        <Hero />
        <Herobottom />
        <Content />
        <Footer />
   {/* {(<div className="grid grid-cols-3 gap-4">).map(<div className="grid grid-cols-3 gap-4">) => (
           <Content />
        ))}
      </div>}}
       
      </div> */}
      </div>   
      
  );
}

export default App;
