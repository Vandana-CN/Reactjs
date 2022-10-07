import logo from './logo.svg';
import './App.css';

function myName(){
  return user.firstname+" "+user.lastname;
}
const user={
  firstname:"VANDANA",
  lastname:"C N",
  degree:"M.Tech",
  college:"VIT"
}

const Student=(props)=>{
  return(
  <div className="App">
  <h1>FullName: {props.firstname+" "+props.lastname}</h1>
  <h2>Branch: {props.Branch}</h2>
  <h2>Hosteller: {props.Hosteller}</h2>
  </div>
)}

function App() {
  return (
  <>
    <div className="App">
    <h2>{myName()}</h2>
      <Student firstname="John" lastname="doe" Branch="CSE" Hosteller="Yes"/>  
      <Student firstname="Marc" lastname="Glenn" Branch="ECE" Hosteller="No"/>
      <Student firstname="Vincent" lastname="Tran" Branch="EEE" Hosteller="Yes"/>
  
    </div>
  </>






    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
