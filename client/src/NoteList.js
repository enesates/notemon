import { useState, useEffect } from 'react';
import axios from 'axios';

function NoteList({ folderId }) {
    const [notes, setNotes] = useState({});

    const fetchNotes = async () => {
        const res = await axios.get(process.env.REACT_APP_NOTES_SERVICE_API_URL + '/folders/' + folderId + '/notes');

        setNotes(res.data);
    }

    useEffect(() => {
        fetchNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderedNotes = Object.values(notes).map(note => {
        return <li key={note.id}> {note.content} </li>;
    });

    return (
      <ul>
        {renderedNotes}
      </ul>
    );
}
  
export default NoteList;
