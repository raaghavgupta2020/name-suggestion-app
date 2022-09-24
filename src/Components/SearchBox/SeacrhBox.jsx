import { useState } from 'react';
import './SeacrhBox.css'
const SeacrhBox = ({handleInputChange}) => {
    const[keyword , setKeyword] = useState("");
    return (
        <div className="search-container">
            <input 
                type="text" 
                value={keyword}
                className="search-box" 
                placeholder="Type Keywords"
                onChange={(e)=>{ 
                    setKeyword(e.target.value);
                    handleInputChange(e.target.value)
                    // console.log(e.target.value)
                }}
            />
        </div>
    );
}
 
export default SeacrhBox;