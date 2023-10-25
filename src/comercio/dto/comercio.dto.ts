import { IsString, MinLength, MaxLength, IsNumber, Length, IsIn, Min, Max, Matches, IsEmail, IsNotEmpty, IsEmpty} from "class-validator";

export class comercioDto {
    @IsString()
    @IsEmpty()
    XComercioID:string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(13)
    @MaxLength(16)
    token:string
}