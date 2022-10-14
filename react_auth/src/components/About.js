import React from 'react'
import logo192 from './/logo192.png';


const AboutUs = ()=> {
    return (
        <>
        <div>
            <h1>
                AboutUs
            </h1>
        </div>

        <div class="container">
  <h2>Carousel Example</h2>  
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    
    <div class="carousel-inner">
      <div class="item active">
        <img src={logo192} alt="Los Angeles" style="width:100%;"/>
      </div>

      <div class="item">
        {/* <img src="logo" alt="Chicago" style="width:100%;"/> */}
      </div>
    
      <div class="item">
        {/* <img src="logo" alt="New york" style="width:100%;"/> */}
      </div>
    </div>

    
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

</>

    )
}
export default AboutUs