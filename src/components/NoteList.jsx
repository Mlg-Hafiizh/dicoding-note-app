import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
 
function NoteLists({ notes, typeNote, onDelete, onArchive, onUnArchive }) {
  const noArchiveNotes = notes.filter((note) => !note.archived);
  const ArchiveNotes = notes.filter((note) => note.archived);

  return (
    <div className="note-list">
      {typeNote === "active" ? (
        <div className="note-list-acitve">
          <h2>Catatan Aktif</h2>
          {noArchiveNotes.length === 0 ? (
            <p className="empty-list">Catatan Tidak Ada</p>
          ) : (
            noArchiveNotes.map((note) => (
              <NoteItem
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                onArchive={onArchive}
                {...note}
              />
            ))
          )}
        </div>  
      ): (
        <div className="note-list-non-acitve">
          <h2>Arsip</h2>
          {ArchiveNotes.length === 0 ? (
            <p className="empty-list">Arsip Kosong</p>
          ) : (
            ArchiveNotes.map((note) => (
              <NoteItem 
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              isArchived={note.archived}
              onUnArchive={onUnArchive}
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
  typeNote : PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired, 
  onArchive: PropTypes.func, 
  onUnArchive: PropTypes.func 
};

 
export default NoteLists;