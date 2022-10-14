// import React from 'react'
import React, {useEffect, useState} from "react"
import Products from './Products';
import {useDispatch,useSelector} from 'react-redux';

import {getPosts} from "../redux/Feature/postSlice"

const Dashboard = () => {

    //using redux
    const {posts,loading }=useSelector((state)=>state.post);
    const dispatch=useDispatch();
    useEffect(() =>{
    dispatch(getPosts());

    },[])

    //useEffect users
    const [users, setUsers] = useState([])

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            return response.json()
        }).then(data =>{
            setUsers(data)
        })
    }
    useEffect(()=> {
        fetchData()
    }, [])

    
  
    return (
        <>
      {/* <div className="App" style={{width:300,border:'solid',borderRadius:10,borderColor:'ButtonShadow'}}>
        <h1 style={{textAlign:'left',marginLeft:40}}>Clients</h1>
        <hr/>
        <table >
       {posts.map((item)=>(
        <ul style={{textAlign:'left'}}>{item.username}</ul>
       ))}

        </table>
      </div> */}

        <div style={{backgroundColor: '#b6b9bd',width:500,border:'solid',borderRadius:10,borderColor:'ButtonShadow',float:'right',color:'#3a3939',marginTop:2,marginRight:2}}>
         <h1 style={{textAlign:'left',marginLeft:40,}}>Clients</h1>
         <hr/>
         {/* <table style={{border:1, border:'solid',borderColor:'black'}}> */}
            {users.length>0 && (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            )}
            {/* </table> */}
        </div>

        <div>
        
        <Products/>
        </div>
      </>
    );

    // const [users, setUsers] = useState([])

    // const fetchData = () => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response => {
    //         return response.json()
    //     }).then(data =>{
    //         setUsers(data)
    //     })
    // }
    // useEffect(()=> {
    //     fetchData()
    // }, [])

    // return (
    //     <>
    //     <div>
    //         <h1>Dashboard</h1>
    //     </div>
        
    //     <div>
    //     <h1>Clients</h1>
    //     <table style={{border:1, border:'solid',borderColor:'black'}}>
    //         {users.length>0 && (
    //             <ul>
    //                 {users.map(user => (
    //                     <li key={user.id}>
    //                         {user.name}
    //                     </li>
    //                 ))}
    //             </ul>
    //         )}
    //         </table>
    //     </div>
    //     </>
    // )
}

export default Dashboard