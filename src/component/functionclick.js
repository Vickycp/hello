import React from "react"

function Clcks(params) {
          function Change(params) {
               console.log("color click");
          }
             return (
                   <div>
                       <button onClick ={Change}>click</button>
                   </div>
             );
         
}

export default Clcks;