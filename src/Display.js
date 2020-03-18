import React from 'react';
import DisplayTrending from './DisplayTrending';
import DisplaySearch from './DisplaySearch';

const Display = ({ value }) => {
  if (!value) {
    return <DisplayTrending />;
  }
  return <DisplaySearch value={value} />;
};

export default Display;
