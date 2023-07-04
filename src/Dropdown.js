import React from 'react';

function Dropdown({category, setcategory}){

return (
          <div class="dropdown" style={{marginRight: -50 + 'em'}}>
          <button class="dropbtn">{category}</button>
          <div class="dropdown-content"style={{marginLeft: -2.4 + 'em'}} >
            <button onClick={() => setcategory("Individual")}> Individual</button>
            <button onClick={() => setcategory("List")}> List</button>
            <button onClick={() => setcategory("Gallery")}> Gallery</button>
          </div>    
        </div>
     );
}

export default Dropdown; 