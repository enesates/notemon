import { useState } from 'react';
import axios from 'axios';

function FolderCreate() {
    const [folderName, setFolderName] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        
        await axios.post(process.env.REACT_APP_FOLDERS_SERVICE_API_URL + '/folders', {
            folderName: folderName
        });

        setFolderName('');
    };

    return (
      <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Folder Name</label>
                <input 
                    className="form-control"
                    value={folderName}
                    onChange={e => setFolderName(e.target.value)}
                />
            </div>
            <button className="btn btn-primary">Create</button>
        </form>
      </div>
    );
}
  
export default FolderCreate;
