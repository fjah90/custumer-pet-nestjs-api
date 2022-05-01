/* eslint-disable prettier/prettier */
import { IsString, MaxLength, IsNumber, IsEmail } from 'class-validator';

export class UpdateCustumerDto {
    @IsNumber()
    @MaxLength(8, { message: 'this dni is not valid' })
    readonly dni: number;

    @IsString()
    @MaxLength(50, { message: 'this first name is not valid' })
    readonly firstName: string;

    @IsString()
    @MaxLength(50, { message: 'this last name is not valid' })
    readonly lastName: string;

    @IsNumber()
    @MaxLength(1, { message: 'this phone number is not valid' })
    readonly phoneNumber: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    readonly note: string;
}
