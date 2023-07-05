import React from 'react';

function Dropdown({category, setcategory}){

return (
          <div className ="dropdown" style={{marginRight: -50 + 'em'}}>
          <button className ="dropbtn" data-testid = "dropdownButton">{category}</button>
          <div className="dropdown-content"style={{marginLeft: -2.4 + 'em'}} >
            <button onClick={() => setcategory("Individual")} data-testid = "individualDropdownButton"> Individual</button>
            <button onClick={() => setcategory("List")} data-testid = "listDropdownButton"> List</button>
            <button onClick={() => setcategory("Gallery")} data-testid = "theGalleryDropdownButton"> Gallery</button>
          </div>    
        </div>
     );
}

export default Dropdown; 