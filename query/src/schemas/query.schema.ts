import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QueryDocument = Query & Document;

class NoteDTO {
  id: string | undefined;
  content: string | undefined;
}

@Schema()
export class Query {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  folderName: string;

  @Prop([NoteDTO])
  notes: [NoteDTO];
}

export const QuerySchema = SchemaFactory.createForClass(Query);
