import { 
  Controller,
  Get,
} from '@nestjs/common';

@Controller()
export class AppController {
  constructor(
  ) {}

  @Get('sample')
  sample(): string {
    return 'sample';
  }
}
