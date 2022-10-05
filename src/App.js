
import './App.css';
import Content from './components/Content';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  return (
      <div className="container mx-auto">
        <NavBar />
        <Hero />
        <Content />
   {/* {(<div className="grid grid-cols-3 gap-4">).map(<div className="grid grid-cols-3 gap-4">) => (
           <Content />
        ))}
      </div>}}
       
      </div> */}
      </div>   
      
  );
}

export default App;
