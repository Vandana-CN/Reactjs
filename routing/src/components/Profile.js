import react from 'react'
import { useNavigate,useParams } from 'react-router-dom'
//use of navigate thing
const Profile = ()=> {

    // let navigate = useNavigate();

    // return(
    //     <div>
    //         <h1>This is a profile page</h1>
    //         <button onClick={()=>{navigate("/BakeryPage")}}>Go to Bakery Page</button>
    //     </div>
    // )


    //use of username parameter
    let navigate = useNavigate();
    let {username, userid}=useParams();
    return(
        <div style={{marginLeft:25}}>
             <h1>This is a profile page for {username} {userid}</h1>
            <button onClick={()=>{navigate("/BakeryPage")}}>Go to Bakery Page</button>
        </div>

    )
}

export default Profile