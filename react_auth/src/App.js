import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import {Login} from './components/Login';
import Profile from './components/Profile';
import Protected from './components/Protected';
import { useEffect } from "react";

function App() {

  return(
    <Router>
      <nav className='nav' id='show'>
        <Link className='link' to="/">HOME</Link>
        {/* <Link className='link' to="/AboutUs">ABOUT US</Link> */}
        {/* <Link className='link' to="/Profile">PROFILE</Link> */}
        {/* <Link id='btn' className='link' to="/Login">LOGIN</Link> */} 
      </nav>
      <Routes>
        <Route path="/" element={<Protected Component={Home}/>}/>
        {/* <Route path="/AboutUs" element={<Protected Component={About}/>}/>
        <Route path="/Profile" element={<Protected Component={Profile}/>}/> */}
        <Route path="/Login" element={<Login/>}/>    
      </Routes>

    </Router>
  
  );

}
export default App;


