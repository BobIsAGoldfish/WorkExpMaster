import React from 'react';
import Data from './data.json'

function DropdownFilter({filterType, setFilterType, setItemNo}){
  let itemTypes = new Set([]);
  const output = []
  for (var j =0; j < Data.length; j++){
    itemTypes.add(Data[j].name)
} itemTypes = Array.from(itemTypes)
for (let i=0; i<itemTypes.length; i++){
  output.push(<div className = "Row"> <button className = "dropDownButton" onClick={() => {setFilterType(itemTypes[i]); setItemNo(0)}}> {itemTypes[i]} </button> </div>)
}
return (
          <div className ="dropdown" >
          <button className ="dropbtn" data-testid = "dropdownOfSortsButton">{filterType}</button>
          <div className="dropdown-content" >
            
            {output}
            <button className = "dropDownButton" onClick={() => setFilterType("All items")} > All items</button>
          </div>    
        </div>
     );
}

export default DropdownFilter; 