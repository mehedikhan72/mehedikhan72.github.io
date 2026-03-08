import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar-container">
      <div className="relative">
        <i className='bx bx-search absolute left-4 top-1/2 transform -translate-y-1/2 text-lg opacity-40'></i>
        <input
          type="text"
          placeholder="Search by title or topic..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input w-full pl-12 pr-12 py-3 bg-secondary text-primary border border-primary border-opacity-20 rounded-md focus:outline-none focus:border-opacity-40 transition-all duration-200"
          style={{ fontSize: '15px' }}
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-lg opacity-40 hover:opacity-100 transition-opacity"
            aria-label="Clear search"
          >
            <i className='bx bx-x'></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
