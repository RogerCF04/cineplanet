import { Module } from '@nestjs/common';
import { TarjetaController } from './tarjeta/tarjeta.controller';
import { TarjetaService } from './tarjeta/tarjeta.service'; 
import { ComercioController } from './comercio/comercio.controller';
import { ComercioService } from './comercio/comercio.service';

@Module({
  imports: [],
  controllers: [TarjetaController, ComercioController],
  providers: [TarjetaService, ComercioService],
})
export class AppModule {}
