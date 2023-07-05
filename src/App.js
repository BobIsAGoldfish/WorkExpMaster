import logo from './logo.svg';
import './App.css';
import DataTable from './DataTable.js';
import Listview from './Listview.js';
import Galleryview from './Galleryview.js'
import Dropdown from './Dropdown.js';
import React, { useState, useEffect} from 'react';

function App() {

  const [category, setcategory] = useState(localStorage.getItem("Category"));
  const [itemNo, setItemNo] = useState(parseInt(localStorage.getItem("ItemNo")));
  useEffect(() => {
    if (category === null) setcategory("Individual");
    if (isNaN(itemNo)) setItemNo(0);
  
    localStorage.setItem("Category", category)
    localStorage.setItem("ItemNo", itemNo)
    console.log(itemNo)
  }, [category, itemNo])
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1><img src={logo} className="App-logo" alt="logo" />Junior</h1>
        <Dropdown category = {category} setcategory = {setcategory} /> 
        {category === "Individual"?<DataTable itemNo = {itemNo} setItemNo = {setItemNo}/>:null}
        {category === "List"?<Listview setItemNo = {setItemNo} setcategory = {setcategory}/>:null}
        {category === "Gallery"?<Galleryview setItemNo = {setItemNo} setcategory = {setcategory}/>:null}
      </header>
    </div>
  );

}

export default App;