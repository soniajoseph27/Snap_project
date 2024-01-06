
import './App.css';
import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive';
import Navbar from './components/Navbar';
import Content from './components/Content';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Content/>
      <Routes>
        <Route path="/" exact component={<Home/>}/>
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
