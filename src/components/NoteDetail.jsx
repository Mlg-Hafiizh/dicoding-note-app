import React from 'react';
import PropTypes from 'prop-types';

function formatDate(inputDate) {
    const daysOfWeek = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  
    const date = new Date(inputDate);
    const dayOfWeek = daysOfWeek[date.getUTCDay()];
    const dayOfMonth = date.getUTCDate();
    const monthNames = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const monthName = monthNames[date.getUTCMonth()];
    const year = date.getUTCFullYear();
  
    return `${dayOfWeek}, ${dayOfMonth} ${monthName} ${year}`;
}

function NoteDetail({ title, body, createdAt }) {
  return (
    <div className="note-item__detail">
      <h2 className="note-item__title">{title}</h2>
      <p className="note-item__createdAt">{formatDate(createdAt)}</p>
      <p className="note-item__description">{body}</p>
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired, 
  body: PropTypes.string.isRequired,  
  createdAt: PropTypes.string.isRequired
};
 
    
export default NoteDetail;