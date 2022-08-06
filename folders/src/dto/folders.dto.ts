export class CreateFolderDTO {
  name: string;
}

export class UpdateFolderDTO {
  name: string;
}

export class FolderDTO {
  id: string;
  name: string;
}

export class FoldersDTO {
  id: { FolderDTO }[];
}
