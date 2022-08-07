import FolderCreate from "./FolderCreate";
import FolderList from "./FolderList";

function App() {
  return (
    <div className="container">
      <h1>Folder Create</h1>
      <FolderCreate />
      <hr />
      <h1>Folders</h1>
      <FolderList/>
    </div>
  );
}

export default App;
