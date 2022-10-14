import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export const Login=()=>{

    const navigate=useNavigate();
    const login=()=>{
        localStorage.setItem('login',true)
        // document.getElementById('btn').style.visibility="hidden";
        document.getElementById('show').style.visibility='visible';
        navigate('/')
    }

    useEffect(()=>{
        let login=localStorage.getItem('login')
        if(login){
            navigate("/")
        }

    });

    return(

        <div style={{marginTop:10, width:400, height:260,textAlign:"center",border:'solid',borderColor:'#b6b9bd',borderRadius:20,marginLeft:450,padding:40  }}>
            <label style={{color:'#3a3939',fontSize:20,fontWeight:'bold',}}>
                USER NAME 
                {/* <br/> */}
                <input style={{width:180,height:35,borderColor:'#b6b9bd',marginLeft:20,borderRadius:20}} type="text"/>
            </label>
            <br/>
            <br/>
            <br/>
            <br/>
            <label style={{color:'#3a3939',fontSize:20,fontWeight:'bold'}}>
                PASSWORD
                <input style={{width:180,height:35,borderColor:'#b6b9bd',marginLeft:25,borderRadius:20}} type="text"/>
            </label>
            <br/> 
            <br/> 
            <br/>
            <br/>
            <button id="btn" style={{backgroundColor:'#b6b9bd',color:'#3a3939',borderRadius:20,width:150,height:40,marginLeft:20,borderColor:'#b6b9bd',fontSize:15,fontWeight:'bold'}}
             onClick={login}>LOGIN</button>
        </div>
    );

}

