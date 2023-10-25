import { Injectable } from '@nestjs/common';
import { comercioDto } from './dto/comercio.dto';
import { Tarjeta } from 'src/tarjeta/tarjeta.entity';
import { catchError } from 'rxjs';
import { env } from 'process';
const jwt = require('jsonwebtoken');
// import dotenv from 'dotenv';
// dotenv.config();

const secret = 'test';

var datosTarjeta:Tarjeta[] = [];

@Injectable()
export class ComercioService {
    esTokenValido(objeto):any {
        try {
            const decoded = jwt.verify(objeto.token, secret);
            return {valid:true,data:decoded};
        } catch (err) {
            console.error('El token ha caducado o es inválido:', err.message);
            return {valid:false};
        }
    }

    procesaCompra(nuevaCompra:comercioDto): string {
        var mensaje:string = 'El token ha caducado.';
        const leeToken= {token:nuevaCompra.token}
        // Validar si el token está vigente
        let respuesta = this.esTokenValido(leeToken)
        if (respuesta.valid) {
            try {
                datosTarjeta.push(respuesta.data)
                console.log(datosTarjeta);
                console.log('El token está vigente.');
                mensaje = 'compra Satisfactoria';
            }catch(err){
                console.log(err)
            }
        }

        return mensaje;
    }
}
