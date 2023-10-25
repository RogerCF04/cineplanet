import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TarjetaController } from 'src/tarjeta/tarjeta.controller';

describe('TarjetaController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      // .expect('Hello World!');
  });
});
// describe('should respond with a 200 status code', async () =>{
//   const response = await request(TarjetaController).post('/token').send()
//   expect(response.statusCode).toBe(200);
// })
