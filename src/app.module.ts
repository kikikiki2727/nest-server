import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config';
import { VonageService } from './vonage/vonage.service';
import { CampaignModule } from './campaign/campaign.module';

@Module({
  imports: [
    UserModule,
    PostModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CampaignModule],
  controllers: [AppController],
  providers: [AppService, VonageService],
})
export class AppModule {}
