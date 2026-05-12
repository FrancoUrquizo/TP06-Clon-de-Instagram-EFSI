import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import "./BarradeBúsqueda.css"

function BarradeBúsqueda() {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
   
  };

    return(
          <div className="header-search">
                  <div className="search-box">
                   <IoMdSearch/>
                    <input type="text" placeholder="Username, hashtag and story search" />
                  </div>
                </div>
    )

   


}
 export default BarradeBúsqueda