import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export const Login=()=>{

    const navigate=useNavigate();
    const login=()=>{
        localStorage.setItem('login',true)
        //document.getElementById('btn').style.visibility="hidden";
        navigate('/')
    }

    useEffect(()=>{
        let login=localStorage.getItem('login')
        if(login){
            navigate("/")
        }

    });

    return(

        <div style={{marginTop:10 }}>
            <label style={{color:'#3a3939',fontSize:20,fontWeight:'bold'}}>
                UserName :
                <br/>
                <input style={{width:180,height:35,borderColor:'#b6b9bd'}} type="text"/>
            </label>
            <button id="btn" style={{backgroundColor:'#b6b9bd',color:'#3a3939',borderRadius:5,width:80,height:40,marginLeft:20,borderColor:'#b6b9bd',fontSize:15,fontWeight:'bold'}}
             onClick={login}>Login</button>
        </div>
    );

}

