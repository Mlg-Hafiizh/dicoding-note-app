import React from 'react';
import PropTypes from 'prop-types';
 
function UnArchiveButton({ id, isArchived, onUnArchive }) {
  return (
    <button
      className='note-item__Archive'
      onClick={() => onUnArchive(id)}
    >
      {isArchived ? 'Pindahkan' : 'Arsipkan'}
    </button>
  );
}

UnArchiveButton.propTypes = {
  id: PropTypes.string.isRequired, 
  isArchived: PropTypes.bool.isRequired, 
  onUnArchive: PropTypes.func 
};
 
export default UnArchiveButton;