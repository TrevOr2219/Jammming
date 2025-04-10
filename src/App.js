import './App.css';
import React from 'react';
import SearchBar from "./Searchbar";
import SearchResults from './SearchResults';
import Playlist from './Playlist';


function App() {
  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      <div className = "App-Playlist">
        <SearchResults />
        <Playlist />
      </div>

    </div>
  );
}

export default App;