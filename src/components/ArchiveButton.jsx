import React from 'react';
import PropTypes from 'prop-types';
import { FiArchive } from 'react-icons/fi';
 
function ArchiveButton({ id, isArchived, onArchive }) {
  return (
    <button
      className='note-item__Archive'
      onClick={() => onArchive(id)}
    >
      <FiArchive /> {isArchived ? 'Pindahkan' : 'Arsipkan'}
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired, 
  isArchived: PropTypes.bool, 
  onArchive: PropTypes.func 
};
 
export default ArchiveButton;