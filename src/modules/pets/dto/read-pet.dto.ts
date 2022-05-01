/* eslint-disable prettier/prettier */
import { IsString, IsDate, IsNotEmpty } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ReadPetDto {
    @Expose()
    @IsNotEmpty()
    readonly custumerId: string;

    @Expose()
    @IsString()
    readonly chipNumber: string;

    @Expose()
    @IsString()
    readonly name: string;

    @Expose()
    @IsDate()
    readonly birthDate: Date;

    @Expose()
    @IsString()
    readonly species: string;

    @Expose()
    @IsString()
    readonly race: string;

    @Expose()
    @IsString()
    readonly description: string;

    @Expose()
    @IsString()
    readonly photoURL: string;

    limit: any;
}
