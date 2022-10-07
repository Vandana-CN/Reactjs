import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



const App = () => {

  const [curTemp, setTemp] = useState(9);
  const [curSym, setSym] = useState("℃");
  const [curColor, setColor] = useState('rgb(255, 255, 255)');


  
    function increaseTemp()
    {
      
      setTemp(curTemp+1);
      const newCurrTemp = curTemp + 1;
      setnewColor(newCurrTemp);

    }

    function decreaseTemp()
    {
      setTemp(curTemp-1);
      const newTemp = curTemp - 1;
      setnewColor(newTemp);
      
    }

    function setnewColor(newCurrTemp)
    {
      if(newCurrTemp<0)
      {
        color(0, 0, 179);
      }
      else if(newCurrTemp>0 && newCurrTemp <10)
      {
   
        color(0, 89, 179);
      }
      else if(newCurrTemp>=10 && newCurrTemp <20)
      {
  
        color(0, 179, 179);
      }

      else if(newCurrTemp>=20 && newCurrTemp <25)
      {
        
        // setColor('green'); 
        color(89, 179, 0);
      }
      else if(newCurrTemp>=25 && newCurrTemp <30)
      {
   
        color(0, 179, 0);
      }
      else if(newCurrTemp>=30 && newCurrTemp<35)
      {
        color(180,0,0);
      }
      else if(newCurrTemp>=35 && newCurrTemp<40)
      {
        color(185,0,0);
      }
      else if(newCurrTemp>=40)
      {
        color(190,0,0);
      }
    }

    function color(red,green,blue)
    {
      const r = red;
      const g = green;
      const b = blue;
      var c = "rgb("+ r +","+ g +","+ b +")"
      setColor(c);
      console.log(c);
    }

    
    function toFahrenheit()
    {

      console.log(curTemp);
      const ToFah = curTemp * 9/5 + 32;
      setTemp(ToFah);
      setSym("℉");

    }

    function toCelsius()
    {
      console.log(curTemp);
      const ToCel = (curTemp-32)*5/9;
      setTemp(ToCel);
      setSym("℃");
    }

    
  
    return(
      <div className='bg'>
        <div style={{backgroundColor:curColor}} className='temp'>
          <div>
          <h1>{curTemp} {curSym}</h1>
          {/* <h1 style={{color:curColor}}>{curTemp} {curSym}</h1> */}
          </div>

          <button className='btn' onClick={increaseTemp}>+</button>
          <button className='btn' onClick={decreaseTemp}>-</button>
          <button className='btn' onClick={toFahrenheit}>F</button>
          <button className='btn' onClick={toCelsius}>C</button>
        </div>
        </div>

    )

}

export default App;
