/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsEmail } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ReadCustumerDto {
    @Expose()
    readonly id: string;

    @Expose()
    @IsNumber()
    readonly dni: number;

    @Expose()
    @IsString()
    readonly firstName: string;

    @Expose()
    @IsString()
    readonly lastName: string;

    @Expose()
    @IsNumber()
    readonly phoneNumber: string;

    @Expose()
    @IsEmail()
    readonly email: string;

    @Expose()
    @IsString()
    readonly note: string;

    limit: any;
}
