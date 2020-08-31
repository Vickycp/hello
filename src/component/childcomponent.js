import React from 'react'


function childcomponent(props) {
    return ( 
        <div>
           <button onClick={()=>props.fun("baby")}>greetparent</button> 
        </div>
    )
}

export default childcomponent