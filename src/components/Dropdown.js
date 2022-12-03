import React, { useState } from 'react'



const Dropdown = ({selected , setSelected,setCountry}) => {
    const [isActive , setIsActive] = useState(false);
    const options = [
        {countryName : "India", codeName: "IN"},
        {countryName : "USA", codeName: "US"},
        {countryName : "UK", codeName: "GB"},
        {countryName : "South Korea", codeName: "KR"},
        {countryName : "Chaina", codeName: "CN"}
    ];
 
    return (
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => {
            setIsActive(!isActive)
        }}>{selected}</div>
        
           {isActive && (
            <div className="dropdown-content">
               {
                options.map((option) => (
                <div className="dropdown-item" 
                    onClick={(e) => {
                    setSelected(option.countryName);
                    setIsActive(false);
                    setCountry(option.codeName);
                }}>
                    {option.countryName}
                </div>
                ))
               }
            </div>
           )}
        
      </div>
    )
}

export default Dropdown