import React from 'react'

// const name = (name)=>{
//     return React.createElement("div",{id:"bob",className:"boy"},React.createElement("h1",null,name.name))
// }

const name=(nam)=>{
    const {name,rname}=nam
       return (
           <div>
               <h1>hello {name}</h1>
               <h3>f{rname}</h3>
           </div>
       );
};


export default name





// const name=(name)=>{
//     return (
//         <div>
//             <h1>hello {name.name}</h1>
//             <h3>f{name.rname}</h3>
//         </div>
//     );
// };
