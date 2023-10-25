import { Controller, Get, Post, Body, Res, } from '@nestjs/common';
import { TarjetaService } from './tarjeta.service';
import { tarjetaDto } from './dto/tarjeta.dto';
import { HttpStatus } from '@nestjs/common/enums';


@Controller('token')
export class TarjetaController {
  constructor(private readonly TarjetaService: TarjetaService) {}

  @Post()
  genaraToken(@Body() nuevaTarjeta: tarjetaDto) {
    const luhnValidator_ = require("luhn");//importo la librería
    let validCardNumber = luhnValidator_.validate(nuevaTarjeta.card_number);//valida con el algoritmo de luhn
    if (!validCardNumber) {
      return 'Tarjeta Invalida';
    }
    return this.TarjetaService.generaToken(nuevaTarjeta);

  }
}
