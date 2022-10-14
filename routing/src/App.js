import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import BakeryPage from './components/BakeryPage';
import ElectronicsPage from './components/ElectronicsPage';
import Home from './components/Home';
import Profile from './components/Profile';
import facebook from './components/facebook';
import PageNotFound from './components/PageNotFound';


function App() {
  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<Home/>}/>
  //       <Route path="/ElectronicsPage" element={<ElectronicsPage/>}/>
  //       <Route path="/BakeryPage" element={<BakeryPage/>}/>
  //       <Route path="*" element={<PageNotFound/>}/>

  //     </Routes>
  //   </Router>
  // );

  return (
    <Router>
      <nav className='nav'>
        <Link className='link' to="/">HOME</Link>
        <Link className='link' to="/ElectronicsPage">ELECTRONICS</Link>
        <Link className='link' to="/BakeryPage">BAKERY</Link>
        <Link className='link' to="/Profile">PROFILE</Link>
        <Link className='link' to="/facebook">FACEBOOK</Link>
        
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ElectronicsPage" element={<ElectronicsPage/>}/>
        <Route path="/BakeryPage" element={<BakeryPage/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Profile/:username/:userid" element={<Profile/>}/>
        <Route path="/facebook" element={<facebook/>}/>
        <Route path="*" element={<PageNotFound/>}/>

      </Routes>
      <div className='footer'>Footer</div>
    </Router>
  );
}

export default App;
