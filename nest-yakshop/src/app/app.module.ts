import { Module } from '@nestjs/common';
import { InventoryService } from '../domain/inventory/InventoryService';
import { YakService } from '../domain/yak/YakService';
import { InfraModule } from '../infra/infra.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryController } from './inventory.controller';
import { YakController } from './yak.controller';

@Module({
  imports: [InfraModule],
  controllers: [AppController, YakController, InventoryController],
  providers: [AppService, YakService, InventoryService],
})
export class AppModule {}
