import react from 'react'
import instafb from './instafb.png';
import { useNavigate,useParams } from 'react-router-dom'
//use of navigate thing
const Profile = ()=> {



    //use of username parameter
    let navigate = useNavigate();
    let {username, userid}=useParams();
    return(
        <div style={{marginLeft:150,width:1000}}>
            <p style={{marginTop:60}}>A Facebook page is a public profile created by businesses, organizations, celebrities and anyone seeking to promote themselves publicly through social media. Facebook pages work much like personal profile pages, except that they have "fans" instead of "friends." These pages are publicly visible online and often post status updates, links, events, photos and videos to their fans' news feeds and walls.</p>
            <img src={instafb} style={{marginTop:20,width:300,height:200}}/>
             {/* <h1>About {username} {userid}</h1> */}
            {/* <button onClick={()=>{navigate("/BakeryPage")}}>Go to videos Page</button> */}
        </div>

    )
}

export default Profile