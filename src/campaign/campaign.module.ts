import { Module } from '@nestjs/common';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import { VonageService } from '../vonage/vonage.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [CampaignController],
  providers: [CampaignService, VonageService, PrismaService]
})
export class CampaignModule {}
