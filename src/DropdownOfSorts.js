import React from 'react';

function DropdownOfSorts({sortType, setSortType}){

return (
          <div className ="dropdown" >
          <button className ="dropbtn" data-testid = "dropdownOfSortsButton">{sortType}</button>
          <div className="dropdown-content" >
            <button className = "dropDownButton" onClick={() => setSortType("Name (a...z)")} data-testid = ""> Name (a...z)</button>
            <button className = "dropDownButton" onClick={() => setSortType("Name (z...a)")} data-testid = ""> Name (z...a)</button>
            <button className = "dropDownButton" onClick={() => setSortType("Category (a...z)")} data-testid = ""> Category (a...z)</button>
            <button className = "dropDownButton" onClick={() => setSortType("Category (z...a)")} data-testid = ""> Category (z...a)</button>
            <button className = "dropDownButton" onClick={() => setSortType("Price (high...low)")} data-testid = ""> Price (high...low)</button>
            <button className = "dropDownButton" onClick={() => setSortType("Price (low...high)")} data-testid = ""> Price (low...high)</button>
          </div>    
        </div>
     );
}

export default DropdownOfSorts; 