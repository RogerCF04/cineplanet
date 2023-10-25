import { IsString, MinLength, MaxLength, IsNumber, Length, IsIn, Min, Max, Matches, IsEmail, IsInt, IsNotEmpty} from "class-validator";
import { Dominios } from '../tarjeta.entity'
import { Transform } from "class-transformer";
// import { MinLength } from "class-validator/types/decorator/decorators";

export class tarjetaDto {
    @IsNumber()
    @Min(999999999999)
    @Max(9999999999999999)
    card_number:number;
    
    @IsNumber()
    @Min(99)
    @Max(9999)
    cvv:number;

    @Transform(({ value }) => {
      return Number(value);
    })
    @IsInt()
    @Min(1)
    @Max(12)
    expiration_month:string;

    @Transform(({ value }) => {
      return Number(value);
    })
    @Max(new Date().getFullYear() + 5)
    @Min(new Date().getFullYear())
    expiration_year:string;

    @IsEmail()
    @IsString()
    @MinLength(5)
    @MaxLength(100)
    // @IsIn([Dominios.gmail, Dominios.hotmail, Dominios.yahoo])
    @Matches(/^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|yahoo\.es)$/, {
        message: 'El correo electrónico debe ser de gmail.com o hotmail.com o yahoo.es',
      })
    email:string;
}