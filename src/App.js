import './App.css';
import About from './componets/about/About';

import Footer from './componets/footer/Footer';
import Header from './componets/header/header';
import Home from './componets/home/Home';


//import Video from './componets/VideosClass';
const App = () => {
  return (
    <>
     <Header/>
     <main className='main'>
      <Home />
      <About />
      
     </main>
     <Footer />
     


    </>
  );

};

export default App;
//return <h1>Hola Mundo!!! 👋👋👋</h1>;S