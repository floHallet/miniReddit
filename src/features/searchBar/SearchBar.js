import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../searchResults/searchResultsSlice';
import { selectIsLoading } from '../searchResults/searchResultsSlice';
import { BsSearch } from 'react-icons/bs';
import './SearchBar.css';

export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(searchTerm);
        dispatch(callAPI(searchTerm));
        setSearchTerm('');
    };

    return (
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            aria-label="Search posts"
            placeholder="Search Reddit..." 
            value={searchTerm} 
            onChange={handleChange} 
            required/>
          <button 
            type="submit" 
            aria-label="Search" 
            disabled={isLoading}>
            <BsSearch className="search-icon" />
          </button>
        </form>
    );
}