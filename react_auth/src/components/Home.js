import React from 'react'
import { useNavigate } from "react-router-dom";
const Home = () => {

    const navigate=useNavigate();
    const logout=()=>{

        localStorage.clear();
        navigate('/Login');
        

    }
    return (
        <div>
            <h1>Home Page</h1>
            <button style={{backgroundColor:'#b6b9bd',float:'right',color:'#3a3939',borderRadius:5,width:80,height:40,borderColor:'#b6b9bd',fontSize:15,fontWeight:'bold'}} 
            onClick={logout}>Logout</button>
        </div>
    )
}

export default Home