import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import BakeryPage from './components/BakeryPage';
import ElectronicsPage from './components/ElectronicsPage';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './Login';
import Logout from './Logout';
import facebook from './components/facebook';
import PageNotFound from './components/PageNotFound';
import Facebook_Logo from './Facebook_Logo.png';
import messenger_pic from './messenger_pic.png';



function App() {
  
  return (
    <div className="App">


    <Router>
      <nav className='nav'>
      <img src={Facebook_Logo} className="facebook_logo"/>
        <Link className='link' to="/">HOME</Link>
        <Link className='link' to="/ElectronicsPage">FRIENDS</Link>
        <Link className='link' to="/BakeryPage">VIDEOS</Link>
        <Link className='link' to="/Profile">ABOUT US</Link>
        <Link className="logout" to="/Logout">LOGOUT</Link>
        <img src={messenger_pic} className="messenger_logo"/>
        
        {/* <Link className='link' to="/facebook">FACEBOOK</Link> */}
        
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ElectronicsPage" element={<ElectronicsPage/>}/>
        <Route path="/BakeryPage" element={<BakeryPage/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Profile/:username/:userid" element={<Profile/>}/>
        <Route path="/Logout" element={<Logout/>}/>
        {/* <Route path="/Login" element={<Login/>}/> */}
        <Route path="/facebook" element={<facebook/>}/>
        <Route path="*" element={<PageNotFound/>}/>

      </Routes>
      <div className='footer'>
      Copyright © 2022 . All rights reserved.
      </div>
    </Router>


    </div>
  );
}






export default App;
