/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface Custumer extends Document {
    readonly dni: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly phoneNumber: string;
    readonly email: string;
    readonly note: string;
}
