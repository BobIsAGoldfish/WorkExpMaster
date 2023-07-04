import DataPictureButton from './DataPictureButton';
import Data from './data.json';

function Galleryview({setcategory, setItemNo}) {
    function getView(){
    var view = [];
    for (var i = 0; i < Data.length; i+=4){
      for (var j =0; j < 4; j++){
        if (j+i != 7){
        view.push(<div className="grid-item" key = {j+i}><DataPictureButton setItemNo = {setItemNo} product = {Data[j+i]} setcategory = {setcategory} productNo={j+i}/> </div>)
        }
    }
  }
  
  return (view);
}
    return (<div className ="grid-container">{getView()}</div>);
}

export default Galleryview; 