import { 
  Controller,
  Get,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config'

@Controller()
export class AppController {
  constructor(
    private configService: ConfigService,
  ) {
  }

  @Get('sample')
  sample(): string {
    return 'sample';
  }

  @Get('valiables')
  valiables(): object {
    const vonageApiKey: string = this.configService.get<string>('VONAGE_API_KEY')
    const vonageSecret: string = this.configService.get<string>('VONAGE_SECRET')
    return {
      vonageApiKey,
      vonageSecret
    }
  }
}
