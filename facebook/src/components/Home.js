import React from 'react';
import Home_pic from './Home_pic.png';

const Home = () => {
    return (
        <div style={{marginLeft:-80}}>
            <img src={Home_pic} style={{marginTop:20,width:300,height:400}}/>
            {/* <h1>
                This is Home Page
            </h1> */}
        </div>
    )
}

export default Home