import React, { useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import './SearchBar.css';

export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Popular..." value={searchTerm} onChange={handleChange} required/>
          <button type="submit"><BsSearch className="search-icon" /></button>
        </form>
    );
}