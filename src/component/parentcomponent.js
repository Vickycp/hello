import React, { Component } from 'react'
import Childcomponent from './childcomponent'

 class parentcomponent extends Component {



    constructor(props) {
        super(props)
    
        this.state = {
             parentname:"parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(b){
        alert(`hello ${this.state.parentname},${b}`)
    }
    render() {
        return ( <div >
             <Childcomponent   fun={this.greetParent}/>
            </div>
        )
    }
}

export default parentcomponent