import logo from './logo.svg';
import './App.css';
import DataTable from './DataTable.js';
import Listview from './Listview.js';
import Galleryview from './Galleryview.js'
import Dropdown from './Dropdown.js';
import React, { useState, useEffect} from 'react';
import DropdownOfSorts from './DropdownOfSorts.js';
import Data from './data.json';
import DropdownFilter from './DropdownFilter.js'

function App() {
  var data=Data
  const [category, setcategory] = useState(localStorage.getItem("Category"));
  const [itemNo, setItemNo] = useState(parseInt(localStorage.getItem("ItemNo")));
  const [sortType, setSortType] = useState(localStorage.getItem("SortType"));
  const [filterType, setFilterType] = useState(localStorage.getItem("FilterType"))

  useEffect(() => {
    if (category === null) setcategory("Individual");
    if (isNaN(itemNo)) setItemNo(0);
    if (sortType === null) setSortType("Name (a...z)");
    if (filterType === null) setFilterType("All items")
    localStorage.setItem("Category", category)
    localStorage.setItem("ItemNo", itemNo)
    localStorage.setItem("SortType", sortType)
    localStorage.setItem("FilterType", filterType)
  }, [category, itemNo, sortType, filterType])
  if (sortType=== "Name (z...a)"){
    data.sort((a, b) => b.name.localeCompare(a.name))
  } else if (sortType==="Name (a...z)"){
    data.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortType==="Category (a...z)"){
    data.sort((a, b) => a.department.localeCompare(b.department))
  }  else if (sortType==="Category (z...a)"){
    data.sort((a, b) => b.department.localeCompare(a.department))
  }  else if (sortType==="Price (high...low)"){
    data.sort((a, b) => b.price - a.price);
  }  else if (sortType==="Price (low...high)"){
    data.sort((a, b) => a.price - b.price);
  }  
  if (filterType !== "All items") {
    var tempData = []
    for (var i = 0; i < data.length; i++) {
      if (data[i].name === filterType) {
        tempData.push(data[i])
      }
    } 
    data = tempData
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1><img src={logo} className="App-logo" alt="logo" />Junior </h1>
        <div className='Row'  style={{marginRight: 0 + 'em'}}>
        <Dropdown category = {category} setcategory = {setcategory} />
        <DropdownOfSorts sortType = {sortType} setSortType = {setSortType} />
        <DropdownFilter filterType = {filterType} setFilterType = {setFilterType} setItemNo = {setItemNo}/>
        </div> 
        {category === "Individual"?<DataTable itemNo = {itemNo} data={data} setItemNo = {setItemNo}/>:null}
        {category === "List"?<Listview setItemNo = {setItemNo} Data={data} setcategory = {setcategory}/>:null}
        {category === "Gallery"?<Galleryview setItemNo = {setItemNo} Data={data} setcategory = {setcategory}/>:null}
      </header>
    </div>
  );

}

export default App;