// import React from 'react';
// const Greet = () =>  <h1>love you baby</h1>
// export default Greet;

import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron,Button} from "react-bootstrap"
import React from 'react'



function Greet(params) {
    return (
        <div className="App">
        <div className="container">
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                     </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </div>
        </div>
    );
}


export default Greet;