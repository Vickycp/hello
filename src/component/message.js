import React,{Component} from 'react';
 


class Mes extends Component{
    constructor() {
        super()
        this.state ={
            message :"so we create a state object"
        }
        
      
    }

    changemessage(){
             this.setState({
                 message:"thanks for clicking"
             })
    }
    render(){
        return(
           <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changemessage()}>change</button>
            </div>
        )
    }
}


export default Mes;