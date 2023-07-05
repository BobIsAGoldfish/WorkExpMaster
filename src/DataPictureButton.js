import React from 'react';
import Data from './data.json'

function DataPictureButton({setcategory, setItemNo, productNo, product}) {

     return (
          <div className="tooltip">
     <img  src={`../img/${product.pic}`} alt="product pic" width="250" height="150" onClick={() => {setItemNo(productNo); setcategory("Individual"); sessionStorage.setItem("currentItemNo", productNo);}} ></img>
     <span className="tooltiptext">{Data[productNo].name } ({Data[productNo].size}) - £{Data[productNo].price} </span>
  </div> 
     );
}

export default DataPictureButton; 