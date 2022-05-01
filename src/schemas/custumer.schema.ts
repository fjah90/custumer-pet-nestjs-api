import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustumerDocument = Custumer & Document;

@Schema()
export class Custumer {
    @Prop()
    dni: Number;

    @Prop()
    firstName: String;

    @Prop()
    lastName: String;

    @Prop()
    phoneNumber: String;

    @Prop()
    email: String;

    @Prop()
    note: String;

}

export const CustumerSchema = SchemaFactory.createForClass(Custumer);
