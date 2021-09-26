
import React from 'react'

const Aboutus = () => {
  return (

    
        <>
    
      
         
         <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100"                 src="./images/images.jpg"
 alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100"                 src="./images/images.jpg"
 alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100"                 src="./images/images.jpg"
 alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
         <br/><div class="row">
         <img class="col-md-4" class="img-circle"              src="./images/cap.jpg"
 alt="cap"/>
         <p class="text-left">
        <h3 class="text-center">Programme</h3> <br/> TARGET RANKER SUPER batch for JEE- MAIN and Advancedfor 2021 is going to start<br/> 
         from 9th October .To get admission in this batch , your rank in JEE-MAIN Should be<br/>
         below 60,000, Concessions criteria isavailable on our website. Our foundation course<br/> 
         old students will be given additional concessions.We will also start our offline classes<br/>
         from 28th, Oct. Class-9th to Target Batches, but for those who could not attend offline <br/>
         classes, online classes will continue for whole year.<br/>
         Courses<br/>
1. Classroom Coaching Programme <br/>
( Online class during lock down and regular class.)<br/>
2. Purely Online class for full session.
         </p>
         </div>
        
         <br/><br/>
          <div className="footerdesign">
         
          <div class="row g-2">
          <br/>
  <div class="col-md">
    <div class="text-center">
    <span class="badge badge-pill badge-info"><h3>Contact Us</h3></span>
    </div>

    <div class="text-center">
    <p class="glyphicon glyphicon-envelope">ocmsystem@gmail.com
  
  </p><br/>
  <p class="glyphicon glyphicon-phone">9000000000<br/>
    
  </p>
    </div>

   
  </div>
</div>
      
      <br />
      <div>
        <hr />
        <br />
        <p class="my-1" class="text-center">
          Copy Right @2021. All Rights Reserved By{" "}
          {/* <spam style={{ color: "red" }}> */}
          <a href="#">Online Coaching Management System</a>
          {/* </spam> */}
        </p>
        <p style={{ margin: 0 }}></p>
        <br />
      </div>
      {/* <!-- footer ends --> */}
      {/* <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) --> */}
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
        crossOrigin="anonymous"
      ></script>
    </div>
        </>
     
  );
}

export default Aboutus;
