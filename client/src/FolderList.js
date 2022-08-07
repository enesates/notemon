import { useState, useEffect } from 'react';
import axios from 'axios';
import NoteCreate from './NoteCreate';
import NoteList from './NoteList';

function FolderList() {
    const [folders, setFolders] = useState({});

    const fetchFolders = async () => {
        const res = await axios.get(process.env.REACT_APP_FOLDERS_SERVICE_API_URL + '/folders');

        setFolders(res.data);
    }

    useEffect(() => {
        fetchFolders();
    }, []);

    const renderedFolders = Object.values(folders).map(folder => {
        return (
            <div 
                className='card' 
                style={{width: '30%', marginBottom: '20px' }}
                key={folder.id}
            >
                <div className='card-body'>
                    <h3>{folder.folderName}</h3>
                    <NoteList folderId={folder.id} />
                    <NoteCreate folderId={folder.id} />
                </div>
            </div>
        );
    });

    return (
      <div className='d-flex flex-row flex-wrap justify-content-between'>
        {renderedFolders}
      </div>
    );
}
  
export default FolderList;
