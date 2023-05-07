import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Work {
  @Prop()
  number: string;
  @Prop()
  icon: string;
  @Prop()
  text: string;
  @Prop()
  width: string;
  @Prop()
  color: string;
  @Prop()
  size: string;
}
export const WorkSchema = SchemaFactory.createForClass(Work)