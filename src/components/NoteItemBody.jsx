import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

function overFlowText({ description, maxWords }) {
  if (!description) {
    return "`Tidak ada catatan`"; // Handle the case where description is undefined or null
  }

  const words = description.split(' ');

  if (words.length <= maxWords) {
    return description;
  } else {
    const truncatedText = words.slice(0, maxWords).join(' ') + ' ...';
    return truncatedText;
  }
}
 
function NoteItemBody({ id, title, body, createdAt }) {
 return (
  <div className="note-container">
    <div className="note-item__content">
      <div className="note-item__title">
        <h2 className="note-item__title__desc">
          <b><Link to={`/detail/${id}`} className="no-decoration">{overFlowText({ description: title, maxWords: 3 })}</Link></b>
          <p className="note-item__createdAt">{formatDate(createdAt)}</p>
        </h2>
      </div>
     <p className="note-item__description">{overFlowText({ description: body, maxWords: 28 })}</p>
    </div>
  </div>
 );
}

NoteItemBody.propTypes = {
  id: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  body: PropTypes.string.isRequired, 
  createdAt: PropTypes.instanceOf(Date).isRequired, 
};
 
export default NoteItemBody;