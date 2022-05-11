import React from 'react';
import { BsReddit } from 'react-icons/bs';
import { SearchBar } from './features/searchBar/SearchBar';
import { SearchResults } from './features/searchResults/SearchResults';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-brand">
          <BsReddit className="App-logo" />
          <h1>Mini<span>Reddit</span></h1>
        </div>
        <SearchBar />
      </header>
      <main>
        <SearchResults />
      </main>
    </div>
  );
}

export default App;
