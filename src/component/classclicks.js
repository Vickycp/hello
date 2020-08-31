import React, { Component } from 'react'


export class classclicks extends Component {
     pro = {
          cla:()=>{
              console.log("you may fuck out one day from the earth");
                }    
    }
    Cl(){
        console.log("class clicks")
    }

    render() {
        return (
            <div>
                <button onClick={this.pro.cla}>Class Clicks</button>
            </div>
        )
    }
}

export default classclicks
