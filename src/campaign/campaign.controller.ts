import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CampaignService } from "./campaign.service";
import { Campaign } from '@prisma/client';

@Controller('campaign')
export class CampaignController {
  constructor(
    private readonly campaignService: CampaignService
  ) {}

  @Post()
  async create(): Promise<string> {
    const campaign = await this.campaignService.create();
    return campaign.sessionId;
  }

  @Get(':id')
  async getCampaignById(
    @Param('id') id: string
  ): Promise<Campaign> {
    return await this.campaignService.getCampaignById(Number(id))
  }
}
