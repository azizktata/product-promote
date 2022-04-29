
import './App.css';
import Footer from './Components/Footer/Footer';
import HowItWork from './Components/HowItWork/HowItWork';
import Main from './Components/Main/Main';
import NavBar from './Components/NavBar/NavBar';
import Pricing from './Components/Pricing/Pricing';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Pricing/>
      <HowItWork/>
      <Footer/>
    </div>
  );
}

export default App;
