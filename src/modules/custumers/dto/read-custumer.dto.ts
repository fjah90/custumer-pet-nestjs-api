import { IsString, IsNumber, IsEmail } from "class-validator";
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ReadCustumerDto {
    @Expose()
    readonly id: String;

    @Expose()
    @IsNumber()
    readonly dni: Number;

    @Expose()
    @IsString()
    readonly firstName: String;

    @Expose()
    @IsString()
    readonly lastName: String;

    @Expose()
    @IsNumber()
    readonly phoneNumber: String;

    @Expose()
    @IsEmail()
    readonly email: String;

    @Expose()
    @IsString()
    readonly note: String;

    limit: any;

}