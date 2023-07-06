import React from 'react';

function uppercaseFirstLetter(word){
     return word[0].toUpperCase()+word.substr(1,word.length)
}
function DataItem({ product }) {

     return (
          <div className="row">
               <div className="column">
                    <img className="frame" src={`../img/${product.pic}`} alt="product pic" width="250" height="150" />
               </div>
               <div className="column">
                    <p className="frame2"> Name: {uppercaseFirstLetter(product.name)}</p>
                    <p className="frame2">Size: {uppercaseFirstLetter(product.size)}</p>
                    <p className="frame2">Department: {uppercaseFirstLetter(product.department)}</p>
               </div>
               <div className="column">
                    <p className="frame">Price: £{product.price.toFixed(2)}</p>
               </div>

          </div>
     );
}

export default DataItem; 