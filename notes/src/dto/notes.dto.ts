export class CreateNoteDTO {
  content: string;
}

export class UpdateNoteDTO {
  content: string;
}

export class NoteDTO {
  id: string | undefined;
  content: string | undefined;
  folderId: string | undefined;
}

export class NotesDTO {
  [noteId: string]: NoteDTO;
}

export class NotesByFolderDTO {
  [folderId: string]: NotesDTO;
}
