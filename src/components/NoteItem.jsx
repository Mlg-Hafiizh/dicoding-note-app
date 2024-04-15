import React from 'react';
import PropTypes from 'prop-types';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import UnArchiveButton from './UnArchiveButton';

function NoteItem({ id, title, body, isArchived, createdAt, onDelete, onArchive, onUnArchive }) {
  const createdAtDate = new Date(createdAt);
  return (
    <div className="note-item">
      <NoteItemBody id={id} title={title} body={body} createdAt={createdAtDate} />
      <div className='note-item__action'>
        <DeleteButton id={id} onDelete={onDelete} />
        {isArchived ? (
          <UnArchiveButton id={id} isArchived={isArchived} onUnArchive={onUnArchive} />
        ) : (
          <ArchiveButton id={id} isArchived={isArchived} onArchive={onArchive} />
        )}
      </div>
    </div>
  );
}

NoteItem.defaultProps = {
  onUnArchive: () => {}
};

NoteItem.propTypes = {
  id: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  body: PropTypes.string.isRequired, 
  isArchived: PropTypes.bool, 
  createdAt: PropTypes.string.isRequired, 
  onDelete: PropTypes.func.isRequired, 
  onArchive: PropTypes.func, 
  onUnArchive: PropTypes.func 
};
  
export default NoteItem;