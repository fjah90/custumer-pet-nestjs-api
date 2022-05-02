/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface Pet extends Document {
    readonly custumerId: string;
    readonly chipNumber: string;
    readonly name: string;
    readonly birthDate: number;
    readonly species: string;
    readonly race: string;
    readonly description: string;
    readonly photoURL: string;
}
