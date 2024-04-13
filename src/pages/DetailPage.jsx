import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import NoteDetail from '../components/NoteDetail';

function DetailPage() {
    const { id } = useParams(); 
    const [note, setNote] = useState(null);
    
    useEffect(() => {
        const noteData = getNote(id); 
        setNote(noteData);
    }, [id]);

    if (!note) {
        return <div>Loading...</div>; 
    }
    
    return (
        <section>
            <NoteDetail 
                title={note.title} 
                body={note.body} 
                createdAt={note.createdAt} 
            />
        </section>
    );
}

export default DetailPage;