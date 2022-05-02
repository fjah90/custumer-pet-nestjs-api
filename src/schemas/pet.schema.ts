/* eslint-disable prettier/prettier */
import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PetDocument = Pet & Document;

@Schema()
export class Pet {
    @Prop()
    custumerId: string;

    @Prop()
    chipNumber: string;

    @Prop()
    name: string;

    @Prop({ type: Date, required: true })
    birthDate: Date;

    @Prop()
    species: string;

    @Prop()
    race: string;

    @Prop()
    description: string;

    @Prop()
    photoURL: string;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
