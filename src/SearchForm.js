import React from 'react';

const SearchForm = ({ SearchMovie }) => (
  <form
    clasName="searchForm"
    onSubmit={e => {
      e.preventDefault();
      SearchMovie(e.target.elements[0].value);
    }}
  >
    <input type="text" className="searchQuery" />
    <input type="submit" className="searchBtn" />
  </form>
);

export default SearchForm;
