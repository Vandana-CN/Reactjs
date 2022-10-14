import React from 'react'
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate=useNavigate();
    const logout=()=>{

        localStorage.clear();
        navigate('/Login');
        

    }
    return (
        <div style={{marginLeft:20}}>
            <h1>Profile</h1>
            <button style={{backgroundColor:'#b6b9bd',color:'#3a3939',borderRadius:5,width:80,height:40,borderColor:'#b6b9bd',fontSize:15,fontWeight:'bold'}} 
            onClick={logout}>Logout</button>
        </div>
    )
}

export default Profile