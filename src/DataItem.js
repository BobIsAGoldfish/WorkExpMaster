import React from 'react';

function DataItem({ product }) {

     return (
          <div className="row">
               <div className="column">
                    <img className="frame" src={`../img/${product.pic}`} alt="product pic" width="250" height="150" />
               </div>
               <div className="column">
                    <p className="frame2"> Name: {product.name}</p>
                    <p className="frame2">Size: {product.size}</p>
                    <p className="frame2">Department: {product.department}</p>
               </div>
               <div className="column">
                    <p className="frame">Price: £{product.price.toFixed(2)}</p>
               </div>

          </div>
     );
}

export default DataItem; 