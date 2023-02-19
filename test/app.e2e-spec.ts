import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { configApp } from '../src/app/app.config';
import { AppModule } from '../src/app/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    configApp(app);
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
  it('should validate yaks', async () => {
    const server = app.getHttpServer();
    await request(server)
      .post('/yak')
      .send([{ name: 'mock-yak' }])
      .expect(400)
      .expect({
        statusCode: 400,
        message: ['gender must be one of the following values: MALE, FEMALE', 'age should not be empty'],
        error: 'Bad Request'
      });
  });

  it('should store yaks', async () => {
    const server = app.getHttpServer();
    await request(server)
      .post('/yak')
      .send([{ name: 'mock-yak', age: 50, gender: 'MALE' }])
      .expect('')
      .expect(201);
    const response = await request(server).get('/yak').expect(200);

    expect(response.body).toEqual([
      {
        id: expect.any(String),
        name: 'mock-yak',
        gender: 'MALE',
        age: 50,
      },
    ]);
  });

  it('should increase inventory when milking', async () => {
    const server = app.getHttpServer();
    await request(server)
      .post('/yak')
      .send([{ name: 'mock-yak', age: 50, gender: 'FEMALE' }])
      .expect('')
      .expect(201);
    const {
      body: [{ id }],
    } = await request(server).get('/yak').expect(200);
    await request(server).post('/yak/milk/').send({ yakId: id }).expect(201);
    const response = await request(server).get('/inventory').expect(200);

    expect(response.body).toEqual({ litersOfMilk: 48.5, numberOfSkins: 0 });
  });
});
