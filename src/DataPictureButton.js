import React from 'react';


function DataPictureButton({setcategory, setItemNo, productNo, product}) {

     return (
     <img src={`../img/${product.pic}`} alt="product pic" width="250" height="150" onClick={() => {setItemNo(productNo); setcategory("Individual");}}></img>
     );
}

export default DataPictureButton; 