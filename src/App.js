import logo from './logo.svg';
import './App.css';
import DataTable from './DataTable.js';
import Listview from './Listview.js';
import Galleryview from './Galleryview.js'
import Dropdown from './Dropdown.js';
import React, { useState } from 'react';

function App() {
  const [category, setcategory] = useState("Individual");
  const [itemNo, setItemNo] = useState(0);
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