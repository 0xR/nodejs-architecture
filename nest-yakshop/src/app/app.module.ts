import { Module } from '@nestjs/common';
import { InventoryService } from '../domain/inventory/InventoryService';
import { YakService } from '../domain/yak/YakService';
import { InfraModule } from '../infra/infra.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YakController } from './yak.controller';

@Module({
  imports: [InfraModule],
  controllers: [AppController, YakController],
  providers: [AppService, YakService, InventoryService],
})
export class AppModule {}
