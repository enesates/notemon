export class CreateFolderDTO {
  folderName: string;
}

export class UpdateFolderDTO {
  folderName: string;
}

export class FolderDTO {
  id: string | undefined;
  folderName: string | undefined;
}

export class FoldersDTO {
  [folderId: string]: FolderDTO;
}
