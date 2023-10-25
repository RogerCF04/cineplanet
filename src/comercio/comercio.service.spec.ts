import { Test, TestingModule } from '@nestjs/testing';
import { ComercioService } from './comercio.service';

describe('ComercioService', () => {
  let service: ComercioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComercioService],
    }).compile();

    service = module.get<ComercioService>(ComercioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
