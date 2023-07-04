import React from 'react';


function DataItemButton({setcategory, setItemNo, productNo, product}) {

     return (
          <div class="row" onClick={() => {setItemNo(productNo); setcategory("Individual");}}>
               <div class="column">
                    <img class="frame" src={`../img/${product.pic}`} alt="product pic" width="250" height="150" ></img>
               </div>
               <div class="column">
                    <p class="frame2"> Name: {product.name}</p>
                    <p class="frame2">Size: {product.size}</p>
                    <p class="frame2">Department: {product.department}</p>
               </div>
               <div class="column">
                    <p class="frame">Price: £{product.price.toFixed(2)}</p>
               </div>

          </div>
     );
}

export default DataItemButton; 