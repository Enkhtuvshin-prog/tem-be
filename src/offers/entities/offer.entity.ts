import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class Offer{
    @Prop()
    title: string;
    @Prop()
    img: string;
    @Prop()
    text: string;
    @Prop()
    btn: string;
    @Prop()
    bgColor: string;
    @Prop()
    width: string;
    @Prop()
    color: string;
    @Prop()
    size: string;
}

export const OfferSchema =  SchemaFactory.createForClass(Offer)