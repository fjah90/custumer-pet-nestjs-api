/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustumerDocument = Custumer & Document;

@Schema()
export class Custumer {
    @Prop()
    dni: number;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    phoneNumber: string;

    @Prop()
    email: string;

    @Prop()
    note: string;
}

export const CustumerSchema = SchemaFactory.createForClass(Custumer);
