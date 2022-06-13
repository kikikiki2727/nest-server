import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CampaignRepository } from "./campaign.repository";
import { Campaign } from '@prisma/client';

@Controller('campaign')
export class CampaignController {
  constructor(
    private readonly campaignRepository: CampaignRepository
  ) {}

  @Post()
  async create(): Promise<string> {
    const campaign = await this.campaignRepository.create();
    return campaign.sessionId;
  }

  @Get(':id')
  async getCampaignById(
    @Param('id') id: string
  ): Promise<Campaign> {
    return await this.campaignRepository.getCampaignById(Number(id))
  }
}
