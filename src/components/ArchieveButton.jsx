import React from 'react';
import PropTypes from 'prop-types';
import { FiArchive } from 'react-icons/fi';
 
function ArchieveButton({ id, isArchived, onArchieve }) {
  return (
    <button
      className='note-item__archieve'
      onClick={() => onArchieve(id)}
    >
      <FiArchive /> {isArchived ? 'Pindahkan' : 'Arsipkan'}
    </button>
  );
}

ArchieveButton.propTypes = {
  id: PropTypes.string.isRequired, 
  isArchived: PropTypes.bool, 
  onArchieve: PropTypes.func 
};
 
export default ArchieveButton;