import DataItemButton from './DataItemButton';
import Data from './data.json';

function Listview({setcategory, setItemNo}) {
    const view = [];
    for (let i = 0; i < Data.length; i++){
      view.push(<div key = {i}><DataItemButton setItemNo = {setItemNo} product = {Data[i]} setcategory = {setcategory} productNo={i}/> </div>)
    }
    return (view);
}

export default Listview; 