import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Category {
  @Prop({ required: true })
  title: string;
  @Prop()
  imgUrl: string;
  @Prop()
  description: string;
  @Prop()
  width: string;
  @Prop()
  color: string;
  @Prop()
  size: string;
}
export const CategorySchema = SchemaFactory.createForClass(Category);
