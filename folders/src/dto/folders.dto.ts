export class CreateFolderDTO {
  folderName: string;
}

export class UpdateFolderDTO {
  folderName: string;
}

export class FolderDTO {
  id: string;
  folderName: string;
}

export class FoldersDTO {
  id: { FolderDTO }[];
}
