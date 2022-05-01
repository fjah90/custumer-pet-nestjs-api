import { IsString, MaxLength, IsNumber, IsEmail } from "class-validator";

export class CreateCustumerDto{
    @IsNumber()
    @MaxLength(8, { message: 'this dni is not valid' })
    readonly dni: Number;

    @IsString()
    @MaxLength(50, { message: 'this first name is not valid' })
    readonly firstName: String;

    @IsString()
    @MaxLength(50, { message: 'this last name is not valid' })
    readonly lastName: String;

    @IsNumber()
    @MaxLength(1, { message: 'this phone number is not valid' })
    readonly phoneNumber: String;

    @IsEmail()
    readonly email: String;

    @IsString()
    readonly note: String;

}