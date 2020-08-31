import React, { Component } from 'react'

class Eventbind extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
           message :"hello"
      }

      this.change =this.change.bind(this)
  }

  change(){
    this.setState({
        message:"good bye"
    })
  }
  



    render() {
        return (<div >
   
              <div>{this.state.message}</div> 
       {/* <button onClick={this.change.bind(this)}>click press</button> */}

       {/* <button onClick={()=>this.change()}>click press</button> */}
       <button onClick={this.change}>click press</button>



            </div>
        )
    }
}
export default Eventbind;