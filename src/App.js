import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skill';
import Testimony from './components/Testimony';

function App() {
  return (
    <>
      
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <Testimony></Testimony>
      <Footer></Footer>
    </>
  );
}

export default App;

/*
import ProgressBar from './components/ProgressBar';
     <ProgressBar bgcolor="orange" progress='30'  height={30}/>
     <ProgressBar bgcolor="red" progress='60'  height={30} />
     <ProgressBar bgcolor="#99ff66" progress='50'  height={30} />
     <ProgressBar bgcolor="#ff00ff" progress='85'  height={30} />
     <ProgressBar bgcolor="#99ccff" progress='95'  height={30} />
*/