import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
 
function NoteLists({ notes, typeNote, onDelete, onArchieve, onUnArchieve }) {
  const noArchieveNotes = notes.filter((note) => !note.archived);
  const archieveNotes = notes.filter((note) => note.archived);

  return (
    <div className="note-list">
      {typeNote === "active" ? (
        <div className="note-list-acitve">
          <h2>Catatan Aktif</h2>
          {noArchieveNotes.length === 0 ? (
            <p className="empty-list">Catatan Tidak Ada</p>
          ) : (
            noArchieveNotes.map((note) => (
              <NoteItem
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                onArchieve={onArchieve}
                {...note}
              />
            ))
          )}
        </div>  
      ): (
        <div className="note-list-non-acitve">
          <h2>Arsip</h2>
          {archieveNotes.length === 0 ? (
            <p className="empty-list">Arsip Kosong</p>
          ) : (
            archieveNotes.map((note) => (
              <NoteItem 
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              isArchived={note.archived}
              onUnArchieve={onUnArchieve}
              {...note} />
            ))
          )}
        </div>
      )}
    </div>
  );
}

NoteLists.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  })).isRequired, 
  onDelete: PropTypes.func.isRequired, 
  onArchieve: PropTypes.func, 
  onUnArchieve: PropTypes.func 
};

 
export default NoteLists;