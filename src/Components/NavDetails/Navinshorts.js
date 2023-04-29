import React from "react";
import './Navinshorts.css'
import SideMenu from './SideMenu'


const Navinshorts = ({setCategory}) => {
  return (
    <div>
      <div className="nav-container">
        <div className="nav-logo">
            <SideMenu setCategory={setCategory}/>
        </div>

        <img
          src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
          alt="logo"
          className="nav-image"
        />
      </div>
    </div>
  );
};

export default Navinshorts;
