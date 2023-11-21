import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { updateState} from '../../ReduxManager/dataStoreSlice'
  
function App() {
    const imageFile= useSelector(state=> state.dataStore.imageFile)
    const dispatch = useDispatch();
    
    function handleChange(e) {
        //this function is used to update 'imageFile' in dataStoreSlice with the user given input ,
        //which will be reflected in personalInfo as the profile image.
        let file = e.target.files[0]
        const  fileType = file['type'];
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
        if (validImageTypes.includes(fileType)) {
            let temp=URL.createObjectURL(file)

            dispatch(updateState({
                key:'imageFile',
                value:temp,
            }))
        }
        else{
            alert('Uploaded file type should be jpg/png!')
        }
    }
    return (
        <div className="container" style={{display:'flex'}}>
    
            <div className="row">
                <img style={{height:'150px', width:'150px',backgroundRepeat:'no-repeat',padding:0}} src={imageFile} alt='profile'/>
            </div>
            <div className="row" style={{paddingTop:'70px',paddingLeft:'40px',color:'white'}}>
                <input id="input" type="file"  onChange={handleChange} />
            </div>
            
  
        </div>
    );
} 
export default App;