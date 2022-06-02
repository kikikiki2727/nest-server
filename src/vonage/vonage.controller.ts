import { 
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
 } from '@nestjs/common';
import { VonageService } from './vonage.service';
import OpenTok from "opentok";

@Controller('vonage')
export class VonageController {
  constructor(
    private readonly vonageService: VonageService
  ) {}

  @Post('generate-token')
  generateToken(
    @Body() postData: { sessionId: string, role: OpenTok.Role }
  ): string {
    const { sessionId, role } = postData
    return this.vonageService.generateToken(sessionId, role);
  }
}
