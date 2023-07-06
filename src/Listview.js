import DataItemButton from './DataItemButton';

function Listview({setcategory, setItemNo, Data}) {
    const view = [];
    for (let i = 0; i < Data.length; i++){
      view.push(<div key = {i}><DataItemButton setItemNo = {setItemNo} product = {Data[i]} setcategory = {setcategory} productNo={i}/> </div>)
    }
    return (<div>List view{view}</div>);
}

export default Listview; 