import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { VonageService } from '../vonage/vonage.service';
import { Campaign } from '@prisma/client';

@Injectable()
export class CampaignService {
  constructor(
    private prisma: PrismaService,
    private vonage: VonageService,
  ) {}

  async create(): Promise<Campaign> {
    const sessionId = this.vonage.createSession();
    return this.prisma.campaign.create({
      data: {
        sessionId
      }
    })
  }

  async getCampaignById(id: number): Promise<Campaign> {
    return this.prisma.campaign.findUnique({
      where: {
        id
      }
    })
  }
}
