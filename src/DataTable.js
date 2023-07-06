
import DataItem from './DataItem';

function DataTable({itemNo, setItemNo, data}) {
  function nextPage(changeby)
  {
    if (itemNo + changeby < data.length && itemNo + changeby > -1) 
    {
      setItemNo(itemNo+changeby);
    }
    else if (itemNo + changeby < 0){
      setItemNo(data.length-1)
    } else {
      setItemNo(0)
    }
  }
 

  return (<div>
    <div className = "Frame">
    Individual view </div>
            <DataItem category = "Individual" product={data[itemNo]} />
            <button onClick={() => {setItemNo(0)}}>First</button>  
            <button onClick={() => {nextPage(-1)}}>Previous</button>  
            <button onClick={() => {nextPage(1)}}>Next</button>
            <button onClick={() => {setItemNo(data.length-1)}}>Last</button>  
          </div>);
}

export default DataTable; 