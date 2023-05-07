import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class Header {
    @Prop()
    title:String;
    @Prop()
    highlight:String;
    @Prop()
    color:String;
    @Prop()
    size:String;
    @Prop()
    bold:String;
    @Prop()
    underlined:String;
    @Prop()
    textAlign:String;
}
 export const HeaderSchema = SchemaFactory.createForClass(Header);