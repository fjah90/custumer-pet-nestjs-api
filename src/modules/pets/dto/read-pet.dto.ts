import { IsString, IsDate, IsNotEmpty } from "class-validator";
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ReadPetDto {
    @Expose()
    @IsNotEmpty()
    readonly customerId: String;

    @Expose()
    @IsString()
    readonly chipNumber: String;

    @Expose()
    @IsString()
    readonly name: string;

    @Expose()
    @IsDate()
    readonly birthDate: Date;

    @Expose()
    @IsString()
    readonly species: String;

    @Expose()
    @IsString()
    readonly race: String;

    @Expose()
    @IsString()
    readonly description: String;

    @Expose()
    @IsString()
    readonly photoURL: String;
    
    limit: any;

}