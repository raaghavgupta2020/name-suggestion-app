import React from "react";
import './Header.css'

const Header = ({headerText , headerExpanded}) => {
    return (
        <div className="head-container">
            <img className={`image-header ${headerExpanded ? `image-header-expanded` : `image-header-contracted`}`} src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" alt="headerImage" />
            <h1 className="head-text">{headerText}</h1>
        </div>
    );
}
 
export default Header;