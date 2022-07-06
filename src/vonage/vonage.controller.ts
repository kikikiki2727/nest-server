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
import { ConfigService } from '@nestjs/config'

type TypeGenerateToken = {
  token: string,
  apiKey: string,
}

@Controller('vonage')
export class VonageController {
  constructor(
    private readonly vonageService: VonageService,
    private configService: ConfigService,
  ) {}

  @Post('generate-token')
  generateToken(
    @Body() postData: { sessionId: string, role: OpenTok.Role }
  ): TypeGenerateToken {
    const { sessionId, role } = postData
    const vonageApiKey: string = this.configService.get<string>('VONAGE_API_KEY')
    const token = this.vonageService.generateToken(sessionId, role);
    return {
      token: token,
      apiKey: vonageApiKey,
    }
  }
}
