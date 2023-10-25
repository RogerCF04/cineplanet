import { Controller, Post, Param, Headers } from '@nestjs/common';
import { ComercioService } from './comercio.service';
import { comercioDto } from './dto/comercio.dto';

@Controller('comercio')
export class ComercioController {
    constructor(private readonly ComercioService: ComercioService) {}

  @Post()
  nuevaCompra(@Headers() nuevaCompra:comercioDto) {
    
    return this.ComercioService.procesaCompra(nuevaCompra);
  }
}