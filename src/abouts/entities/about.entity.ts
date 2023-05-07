import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class About{
    @Prop()
    title: string;
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

export const AboutSchema = SchemaFactory.createForClass(About)
