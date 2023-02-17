import { Test, TestingModule } from '@nestjs/testing';
import { YakController } from './yak.controller';

describe('YakController', () => {
  let controller: YakController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YakController],
    }).compile();

    controller = module.get<YakController>(YakController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
