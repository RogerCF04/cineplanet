import { Injectable } from '@nestjs/common';
import { tarjetaDto } from './dto/tarjeta.dto';
import { env } from 'process';
const jwt = require('jsonwebtoken');

@Injectable()
export class TarjetaService {

  creaToken(cardNumber, cvv, expirationMonth, expirationYear, email) {
    // Crear un objeto con la información que se utilizará para generar el token
    const payload = {
      cardNumber,
      cvv,
      expirationMonth,
      expirationYear,
      email,
    };
    const secret = 'test';
  
    // Generar el token con un límite de tiempo de 15 minutos
    const token = jwt.sign(payload, secret, { expiresIn: '15m' });
  
    return token;
  }
  
  generaToken(nuevaTarjeta:tarjetaDto): any {
    const token = this.creaToken(nuevaTarjeta.card_number, nuevaTarjeta.cvv, nuevaTarjeta.expiration_month, nuevaTarjeta.expiration_year, nuevaTarjeta.email);
    // const token = this.creaToken(nuevaTarjeta.card_number, nuevaTarjeta.cvv);
    console.log('Token:', token);
    
    return {'token':token};
  }
}
