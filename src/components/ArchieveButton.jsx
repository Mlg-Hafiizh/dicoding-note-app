import React from 'react';
import PropTypes from 'prop-types';
 
function ArchieveButton({ id, isArchived, onArchieve }) {
  return (
    <button
      className='note-item__archieve'
      onClick={() => onArchieve(id)}
    >
      {isArchived ? 'Pindahkan' : 'Arsipkan'}
    </button>
  );
}

ArchieveButton.propTypes = {
  id: PropTypes.string.isRequired, 
  isArchived: PropTypes.bool, 
  onArchieve: PropTypes.func 
};
 
export default ArchieveButton;