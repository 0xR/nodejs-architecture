import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfraModule } from '../infra/infra.module';
import { DomainModule } from '../domain/domain.module';
import { YakController } from './yak.controller';

@Module({
  imports: [DomainModule, InfraModule],
  controllers: [AppController, YakController],
  providers: [AppService],
})
export class AppModule {}
