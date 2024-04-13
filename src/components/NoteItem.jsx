import React from 'react';
import PropTypes from 'prop-types';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
import ArchieveButton from './ArchieveButton';
import UnArchieveButton from './UnArchieveButton';

function NoteItem({ id, title, body, isArchived, createdAt, onDelete, onArchieve, onUnArchieve }) {
  const createdAtDate = new Date(createdAt);
  return (
    <div className="note-item">
      <NoteItemBody id={id} title={title} body={body} createdAt={createdAtDate} />
      <div className='note-item__action'>
        <DeleteButton id={id} onDelete={onDelete} />
        {isArchived ? (
          <UnArchieveButton id={id} isArchived={isArchived} onUnArchieve={onUnArchieve} />
        ) : (
          <ArchieveButton id={id} isArchived={isArchived} onArchieve={onArchieve} />
        )}
      </div>
    </div>
  );
}

NoteItem.defaultProps = {
  onUnArchieve: () => {}
};

NoteItem.propTypes = {
  id: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  body: PropTypes.string.isRequired, 
  isArchived: PropTypes.bool, 
  createdAt: PropTypes.string.isRequired, 
  onDelete: PropTypes.func.isRequired, 
  onArchieve: PropTypes.func, 
  onUnArchieve: PropTypes.func 
};
  
export default NoteItem;