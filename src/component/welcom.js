import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap'
class Welcome extends Component {
    render() {
        return(
            <div className="App">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2012/09/img29.jpg"
           alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"   
       alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://previews.123rf.com/images/shamain/shamain1508/shamain150800012/44258379-gothic-mysterious-castle.jpg"
           alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
        );
    }
}





export default Welcome;