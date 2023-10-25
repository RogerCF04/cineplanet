import { Test, TestingModule } from '@nestjs/testing';
import { TarjetaController } from './tarjeta.controller';
import { TarjetaService } from './tarjeta.service';

describe('TarjetaController', () => {
  let TarjetaController: TarjetaController;

  // beforeEach(async () => {
  //   const app: TestingModule = await Test.createTestingModule({
  //     controllers: [TarjetaController],
  //     providers: [TarjetaService],
  //   }).compile();

  //   TarjetaController = app.get<TarjetaController>(TarjetaController);
  // });

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(TarjetaController.genaraToken()).toBe('Hello World!');
  //   });
  // });
});
