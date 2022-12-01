import React, { useState } from "react";
import "./Navbar.css";
import Hamburger from "./Hamburger";
import Dropdown from "./Dropdown";

const Navbar = ({setCategory , setCountry}) => {
    const [selected , setSelected]= useState("India");
    return (
    <div className="nav">
        <div className="icon">
            <Hamburger setCategory = {setCategory}/>
        </div>
        
        <img 
        style= {{cursor:"pointer"}} src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" height="80%"
        alt="logo"/>

        <div>
        <Dropdown selected={selected} setSelected = {setSelected} setCountry={setCountry}/>
</div>       

    </div>
    )
}

export default Navbar