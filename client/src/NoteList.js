function NoteList({ notes }) {
    const renderedNotes = notes ? notes.map(note => {
        return <li key={note.id}> {note.content} </li>;
    }) : [];

    return (
      <ul>
        {renderedNotes}
      </ul>
    );
}
  
export default NoteList;
