import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YakModule } from './modules/yak/yak.module';

@Module({
  imports: [YakModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
