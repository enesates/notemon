import { useState } from 'react';
import axios from 'axios';

function NoteCreate({ folderId }) {
    const [noteContent, setNoteContent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post(process.env.REACT_APP_NOTES_SERVICE_API_URL + '/folders/' + folderId + '/notes', {
            content: noteContent
        });

        setNoteContent('');
    };

    return (
      <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>New Note</label>
                <input 
                    className="form-control"
                    value={noteContent}
                    onChange={e => setNoteContent(e.target.value)}
                />
            </div>
            <button className="btn btn-primary">Create</button>
        </form>
      </div>
    );
}
  
export default NoteCreate;
