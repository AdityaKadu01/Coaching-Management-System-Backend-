import React, { useEffect } from "react" ;
import {Jumbotron,Container,Button,Card,CardBody,CardImg,CardText,Cardstyle,CardTitle,CardHeader,ListGroup,ListGroupItem}  from "reactstrap";
import img2 from './Image/img2.jpg'   ;
import img1 from './Image/img1.jpg'   ;



const Home = () => {
useEffect (() =>{ 
    document.title ="Student Dashboard"
}, []);


    return (
        <div>
            <Jumbotron className="text-center bg-primary">
                <h1 className="display-3"> Student Dashboard</h1>
                <p>
                “A little progress each day adds up to big results.”                </p>
                <Container>
                    <Button color="primary"> Start Using </Button>
                </Container>
            </Jumbotron>
            <br />
            <br />
            <div className="Container">
            <div className="row">
<div className="col-sm-4">
            <Card style={{ width: '14rem' }}>
  <CardImg variant="top" src="Image/img2.jpg" alt="..." />
  <CardBody>
    <CardTitle>Total Courses</CardTitle>
    <CardText>
      6
    </CardText>
  </CardBody>
</Card>  


</div>
<div className="col-sm-4">


            <Card style={{ width: '14rem' }}>
            <CardImg variant="card-img-top" src="Image/img1.jpg" alt="..." />
            
  <CardBody>
    <CardTitle>Total Teachers</CardTitle>
    <CardText>
     25
    </CardText>
    
  </CardBody>

</Card>  
</div>
<div className="col-sm-4">
            <Card style={{ width: '14rem' }}>
  <CardImg variant="top" src="Image/img3.jpg" />
  <CardBody>
    <CardTitle>Total Classes</CardTitle>
    <CardText>
      2
    </CardText>
  </CardBody>
</Card>  
</div>
</div> 

</div>

< Card className="card text-white bg-dark mb-3" style={{ width: '36rem' }}>
  <CardHeader className="card text-white bg-dark mb-3"> Notice Board</CardHeader>
  <ListGroup variant="flush">
    <ListGroupItem className="card text-white bg-dark mb-3" >Dates of Physics Quiz Test :12 October 2021</ListGroupItem>
    <ListGroupItem className="card text-white bg-dark mb-3">Gandhi Jayanti is celebrated annually on 2nd October to commemorate the birthday of Mahatma Gandhi. 2nd October  is your coaching holiday
	 </ListGroupItem>
    <ListGroupItem className="card text-white bg-dark mb-3">Dates of Chemistry Quiz Test :12 October 2021</ListGroupItem>
  </ListGroup>

</Card>



</div>



            );
};
export default Home;