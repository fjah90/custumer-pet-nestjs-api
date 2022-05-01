import { IsString, MaxLength, IsDate, IsNotEmpty } from "class-validator";

export class CreatePetDto{
    @IsNotEmpty()
    readonly customerId: String;
    @IsString()
    @MaxLength(16, { message: 'this chip number is not valid' })
    readonly chipNumber: String;
    @IsString()
    @MaxLength(50, { message: 'this name is not valid' })
    readonly name: String;
    @IsDate()
    readonly birthDate: Date;
    @IsString()
    @MaxLength(50, { message: 'this species is not valid' })
    readonly species: String;
    @IsString()
    @MaxLength(50, { message: 'this race is not valid' })
    readonly race: String;
    @IsString()
    @MaxLength(255, { message: 'this description is not valid' })
    readonly description: String;
    @IsString()
    readonly photoURL: String;

}