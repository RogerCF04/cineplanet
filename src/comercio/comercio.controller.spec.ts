import { Test, TestingModule } from '@nestjs/testing';
import { ComercioController } from './comercio.controller';

describe('ComercioController', () => {
  let controller: ComercioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComercioController],
    }).compile();

    controller = module.get<ComercioController>(ComercioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
