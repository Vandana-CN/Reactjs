import './Resume_left.css';
import mypic from './download.png';
import './Resume_center';
import ResumeCenter from './Resume_center';

function Resume() {
  return (
    
    <>
   
    <div>
    <div class="center" ><ResumeCenter/></div>
    
      <div class="left">
      <header className="App-header">

        <div>
          <img src={mypic}></img>
        </div>
        
        <br></br>
        {/* <br></br> */}
        <div>
            <h1>Contact</h1>
            <hr></hr>
            <h3>Phone</h3>
            <p>1234567890</p>

            <h3>Email</h3>
            <p>abc@gmail.com</p>

            <h3>Address</h3>
            <p>123 Main Street, New York, NY 10030</p>
            
        </div>

        <div>
            <h1>Education</h1>
            <hr></hr>
            <h3>B.Tech</h3>
            <p>VIT University</p>
            

            <h3>12th</h3>
            <p>Narayana</p>
            
        </div>
        
        <div>
            <h1>Skills</h1>
            <hr></hr>
            
            <ul>
                <li>UI/UX</li>
                <li>Visual Design</li>
                <li>Wireframes</li> 
                <li>Story boards</li>
                <li>User Flows</li>
            </ul>
            
        </div>
        <div>
            <h1>Language</h1>
            <hr></hr>
            
            <ul>
                <li>English</li>
                <li>Spanish</li>
                <li>German</li>    
            </ul>
            <br></br>
            {/* <br></br> */}
            {/* <br></br> */}
        </div>
       
      </header>
      </div>
      </div>
      </>
      
    
  );
}

export default Resume;
