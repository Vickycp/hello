import React,{Component} from 'react';
// import logo from './logo.svg';
// import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Greet from './component/greet';
import Welcome from "./component/welcom";
import Bar from "./component/navbar";
import Name from "./component/name"
import Mes from "./component/message"
import Counter from './component/counter';
import Well from './component/well';
import Clicks from "./component/functionclick"
import Classclicks from './component/classclicks';
import Eventbind from './component/eventbind '
import Parentcomponent from './component/parentcomponent';


class App extends Component{
  render(){
    return <div className="App">
    <Parentcomponent/>
      <Bar/>
      <Greet/>
      <Welcome/>
      <Name name ="vicky" rname ="rock"/>
      <Name name ="development" rname ="rock"/>
      <Name name ="localhost" rname ="rock"/>
      <Mes/>
       <Counter/>
       <Well name ="black baby"/>
       <Clicks/>
       <Classclicks/>
       <Eventbind/>
    </div>
  }
}
// function App() {
//   return (
//     < div className="App" >
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//       <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Nav>
//       <Nav.Link href="#deets">More deets</Nav.Link>
//       <Nav.Link eventKey={2} href="#memes">
//         Dank memes
//       </Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
//         </div>
//     );
// }

export default App;