import React from "react";
import NameCard from "../NameCard/NameCard";
import './Results.css'

const Results = ({suggestedNames}) => {

    console.log(suggestedNames)

    // using Array.map function , Taken in a list and return modified list
    const suggestedNameJSX = suggestedNames.map((eachName)=>{
        return <NameCard eachName={eachName}/>
    })

    return (
        <div className="results-container">
            {suggestedNameJSX}
        </div>
    );
}
 
export default Results;