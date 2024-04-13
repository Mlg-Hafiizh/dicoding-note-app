import React from 'react';
import PropTypes from 'prop-types';
 
function NoteSearch({ keyword, keywordChange }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Cari berdasarkan judul"
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)} />
  )
}
 
NoteSearch.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
}
 
export default NoteSearch;
