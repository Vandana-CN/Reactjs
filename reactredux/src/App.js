
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement, logIn} from './Actions/counter';

function App() {
  const counter = useSelector((state)=>state.counter)
  //const status = useSelector((state)=>state.status)

const signin=useSelector((state)=>state.signin)


  const dispatch = useDispatch()

  const inc=()=>{
   
    dispatch(increment())
  }
  const dec=()=>{
    dispatch(decrement())
  }
  const login=()=>{

    dispatch(logIn())

  }
  
  console.log(counter);
  console.log(signin);

  return (
    <>
    <div>
      <h1>Redux Counter App</h1>
      <h2>counter :{counter}</h2>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      
    </div>
    <div>

      <h2>Status :{signin}</h2>

    <button onClick={login}>Login</button>

    </div>
</>
  );
}

export default App;
