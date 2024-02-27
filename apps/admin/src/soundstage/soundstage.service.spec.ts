import { Test, TestingModule } from '@nestjs/testing';
import { SoundstageService } from './soundstage.service';

describe('SoundstageService', () => {
  let service: SoundstageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoundstageService],
    }).compile();

    service = module.get<SoundstageService>(SoundstageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
