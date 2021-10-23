import React, { useState, useEffect } from 'react';
import './Search.css';


function Search({search,setSearch}) { 


    const handleChange = ({target}) => {

        setSearch(target.value)

    }

    return (

        <div className="input-container">
    
        <input
            value={search}
            type="text"
            className="input-search"
            placeholder="Search your character"
            onChange={handleChange}
            onFocus={(e)=> e.preventDefault()}
        />
    </div>
    )
}

export default Search
