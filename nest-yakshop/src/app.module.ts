import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YakModule } from './modules/yak/yak.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [YakModule, DomainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
