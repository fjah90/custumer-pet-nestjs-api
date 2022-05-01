/* eslint-disable prettier/prettier */
import { IsString, MaxLength, IsDate } from "class-validator";

export class UpdatePetDto {
    @IsString()
    @MaxLength(16, { message: 'this chip number is not valid' })
    readonly chipNumber: string;
    @IsString()
    @MaxLength(50, { message: 'this name is not valid' })
    readonly name: string;
    @IsDate()
    readonly birthDate: Date;
    @IsString()
    @MaxLength(50, { message: 'this species is not valid' })
    readonly species: string;
    @IsString()
    @MaxLength(50, { message: 'this race is not valid' })
    readonly race: string;
    @IsString()
    @MaxLength(255, { message: 'this description is not valid' })
    readonly description: string;
    @IsString()
    readonly photoURL: string;
}