class NoteDTO {
  id: string | undefined;
  content: string | undefined;
}

class NotesDTO {
  [noteId: string]: NoteDTO;
}

class FolderDTO {
  id: string | undefined;
  folderName: string | undefined;
  notes: NotesDTO | undefined;
}

export class NotebookDTO {
  [folderId: string]: FolderDTO;
}
