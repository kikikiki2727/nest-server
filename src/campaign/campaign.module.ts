import { Module } from '@nestjs/common';
import { CampaignController } from './campaign.controller';
import { CampaignRepository } from './campaign.repository';
import { VonageService } from '../vonage/vonage.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [CampaignController],
  providers: [CampaignRepository, VonageService, PrismaService]
})
export class CampaignModule {}
