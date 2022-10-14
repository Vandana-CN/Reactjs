import { useEffect } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";

function Login(){

   const navigate=useNavigate();
    const login=()=>{
        localStorage.setItem('login',true);
        navigate('/Home')
        // document.getElementById('page').style.visibility="visible";
        //     document.getElementById('log').style.visibility="hidden";
    }

    useEffect(()=>{
        let login=localStorage.getItem('login')
        console.log(login);
        if(login){
            navigate('/Home');
            document.getElementById('page').style.visibility="visible";
            document.getElementById('log').style.visibility="hidden";
        }

    });
    
    

return(
    <>
    
    <div id="log" >
        <h1>Hello</h1>
        <div style={{marginTop:10 }}>
            <label style={{color:'#3a3939',fontSize:20,fontWeight:'bold'}}>
                UserName :
                <br/>
                <input style={{width:180,height:35,borderColor:'#b6b9bd'}} type="text"/>
            </label>
            <button id="btn" style={{backgroundColor:'#b6b9bd',color:'#3a3939',borderRadius:5,width:80,height:40,marginLeft:20,borderColor:'#b6b9bd',fontSize:15,fontWeight:'bold'}}
            onClick={login} >Login</button>
        </div>
    </div>

    <div id="page" style={{visibility:'hidden',marginTop:-150}}>
    <React.StrictMode>
        <App/>
       </React.StrictMode>
    </div>
    </>
)
}
export default Login