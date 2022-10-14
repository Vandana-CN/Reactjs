//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Dashboard from './components/Dashboard';
// import About from './components/About';
import {Login} from './components/Login';
import Profile from './components/Profile';
import Protected from './components/Protected';
import { useEffect } from "react";


function App() {
 
  return(
   
    <Router>
      
      <nav className='nav' id='show'>
    
        <Link className='link' to="/">DASHBOARD</Link>
        <Link className='link' to="/Profile">PROFILE</Link>
        {/* <Link id='btn' className='link' to="/Login">LOGIN</Link> */}
      </nav>

      <Routes>
        <Route path="/" element={<Protected Component={Dashboard}/>}/>
        <Route path="/Profile" element={<Protected Component={Profile}/>}/>
        <Route path="/Login" element={<Login/>}/>    
      </Routes>

    </Router>
  
  );





  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
