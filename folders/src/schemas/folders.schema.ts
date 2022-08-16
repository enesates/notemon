import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FolderDocument = Folder & Document;

@Schema()
export class Folder {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  folderName: string;
}

export const FolderSchema = SchemaFactory.createForClass(Folder);
