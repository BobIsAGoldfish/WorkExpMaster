import DataPictureButton from './DataPictureButton';



function Galleryview({setcategory, setItemNo, Data}) {
    function getView(){
    var view = [];
    for (var i=0; i < Data.length; i++){
        view.push(<div className="grid-item" key = {i}><DataPictureButton setItemNo = {setItemNo} product = {Data[i]} setcategory = {setcategory} productNo={i}/> </div>)
    }
  
  return (view);
}
    return (<div> Gallery view<div className ="grid-container"> {getView()}</div> </div>);
}

export default Galleryview; 