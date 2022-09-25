import React from "react";
import './NameCard.css'

const nameCheapURL = "https://www.namecheap.com/domains/registration/results/?domain=%27%3B" 

const NameCard = ({eachName}) => {
    return (
        <a href={`${nameCheapURL}${eachName}`}>
            <div className="name-card">
                <p className="suggestions">{eachName}</p>
            </div>
        </a>

    );
}
 
export default NameCard;