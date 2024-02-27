import { Test, TestingModule } from '@nestjs/testing';
import { SoundstageController } from './soundstage.controller';
import { SoundstageService } from './soundstage.service';

describe('SoundstageController', () => {
  let controller: SoundstageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoundstageController],
      providers: [SoundstageService],
    }).compile();

    controller = module.get<SoundstageController>(SoundstageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
