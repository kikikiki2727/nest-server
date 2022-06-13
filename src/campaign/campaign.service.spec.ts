import { Test, TestingModule } from '@nestjs/testing';
import { CampaignRepository } from './campaign.repository';

describe('CampaignService', () => {
  let service: CampaignRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignRepository],
    }).compile();

    service = module.get<CampaignRepository>(CampaignRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
