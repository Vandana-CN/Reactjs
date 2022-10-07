import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Resume_left from './Resume_left';
import Resume_center from './Resume_center';
import Counter from './Counter';
import reportWebVitals from './reportWebVitals';
import Hooks from './Counter';
import OddEvenNumber from './OddEven';
import Findpalindrome from './palindrome';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Resume_left/> */}
    {/* <OddEvenNumber/> */}
    <Counter/>
    {/* <Findpalindrome/> */}
    
  </React.StrictMode>
);

reportWebVitals();
