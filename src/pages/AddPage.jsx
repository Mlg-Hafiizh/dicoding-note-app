import React from 'react';
import { addNote } from '../utils/api';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';

 
function AddPage() {
    const navigate = useNavigate();

    async function onAddNoteHandler(note) {
        await addNote(note);
        navigate('/');
    }
 
    return (
        <section>
            <NoteInput addNote={onAddNoteHandler} />
        </section>
    )
}
 
export default AddPage;