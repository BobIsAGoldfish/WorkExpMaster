import React from 'react';
import Data from './data.json'

function DataPictureButton({setcategory, setItemNo, productNo, product}) {

     return (
          <div className="tooltip">
     <img  src={`../img/${product.pic}`} alt="product pic" width="250" height="150" onClick={() => {setItemNo(productNo); setcategory("Individual"); sessionStorage.setItem("currentItemNo", productNo);}} ></img>
     <span className="tooltiptext">{(Data[productNo].name)[0].toUpperCase()+(Data[productNo].name).substr(1,(Data[productNo].name).length)} ({Data[productNo].size}) - £{Data[productNo].price.toFixed(2)} </span>
  </div> 
     );
}

export default DataPictureButton; 