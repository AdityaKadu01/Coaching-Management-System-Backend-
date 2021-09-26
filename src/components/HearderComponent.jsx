import React, { Component } from 'react';




class HearderComponent extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     stud_id: this.props.match.params.id,
  // }
  // }
  
    render() {
        return (
            <div>
                <header>
                    {/* <nav className="navbar navbar-expand-md navbar-dark bg-warning">
                    <div className="homelink text-dark"><a href="http://localhost:8080/cdm/home" id="header" className="navbar-brand"> Coaching Management System</a></div>    

                    </nav> */}
                     <div bg="dark" className="container mx-12 black bg-dark" className="text-black">
        <div class="p-3 mb-2 bg-warning text-dark"> <h1 class="text-center">Online Coaching Management System</h1></div>
         
        </div>
        {/* Navigation */}
        <div id="navigation" className="sticky-top">
      <nav class="navbar navbar-expand-lg navbar-light ">
        

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active ">
              <h2>
                <a class="nav-link text-danger " href="/www.cms.com/">
                  Home
                </a>
              </h2>
            </li>
            <li class="nav-item" >
            <h2 >
              <a class="nav-link " href="/www.cms.com/aboutus">
                AboutUs
              </a></h2>
            </li>
            
            
            
            <li class="nav-item" >
            <h2 >
              <a class="nav-link " href="#">
                Course
              </a></h2>
            </li>
            <li class="nav-item">
            <h2>
            {/* <a style={{display:'none'}} class="nav-link " href="/add-student/_register"> */}
            <a class="nav-link " href="/add-student/_register">
                Register
              </a>
            </h2>
             
            </li>
            
            <h2>
            <li class="nav-item">
              {/* <a style={{display:'none'}} class="nav-link " href="#"> */}
              <a class="nav-link " href="#">
                Login
              </a>
            </li>
            </h2>
            

          </ul>
         
        </div>
      </nav>
    </div>
                </header>
            </div>
        );
    }
}

export default HearderComponent;