import React from 'react';

function Dropdown({category, setcategory}){

return (
          <div className ="dropdown">
          <button className ="dropbtn" data-testid = "dropdownButton">{category}</button>
          <div className="dropdown-content" >
            
            <button className = "dropDownButton" onClick={() => setcategory("Individual")} data-testid = "individualDropdownButton"> Individual</button  >
            <div className = "Row"> <button className = "dropDownButton" onClick={() => setcategory("List")} data-testid = "listDropdownButton"> List</button> </div> 
            <div className = "Row"> <button className = "dropDownButton" onClick={() => setcategory("Gallery")} data-testid = "theGalleryDropdownButton"> Gallery</button> </div>
          </div>    
        </div>
     );
}

export default Dropdown; 