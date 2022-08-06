export class CreateNoteDTO {
  content: string;
}

export class UpdateNoteDTO {
  content: string;
}

export class NoteDTO {
  id: string;
  content: string;
}

export class NotesDTO {
  id: { NoteDTO }[];
}

export class NotesByFolderDTO {
  folderId: {
    id: {
      NoteDTO;
    }[];
  }[];
}
