import React from 'react';

const SearchForm = ({ SearchMovie }) => (
  <form
    onSubmit={e => {
      e.preventDefault();
      SearchMovie(e.target.elements[0].value);
    }}
  >
    <input type="text" />
    <input type="submit" />
  </form>
);

export default SearchForm;
