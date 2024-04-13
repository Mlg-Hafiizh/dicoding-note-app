import React from 'react';
import PropTypes from 'prop-types';
 
function UnArchieveButton({ id, isArchived, onUnArchieve }) {
  return (
    <button
      className='note-item__archieve'
      onClick={() => onUnArchieve(id)}
    >
      {isArchived ? 'Pindahkan' : 'Arsipkan'}
    </button>
  );
}

UnArchieveButton.propTypes = {
  id: PropTypes.string.isRequired, 
  isArchived: PropTypes.bool.isRequired, 
  onUnArchieve: PropTypes.func 
};
 
export default UnArchieveButton;