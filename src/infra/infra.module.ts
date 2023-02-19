import { Module } from '@nestjs/common';
import { EventDispatcher } from '../domain/ddd/EventDispatcher';
import { InventoryRepository } from '../domain/inventory/InventoryRepository';
import { YakRepository } from '../domain/yak/YakRepository';
import { MemoryInventoryRespository } from './MemoryInventoryRespository';
import { MemoryEventDispatcher } from './memory-event-dispatcher.service';
import { MemoryYakRepository } from './MemoryYakRepository';

@Module({
  imports: [],
  providers: [
    { provide: EventDispatcher, useClass: MemoryEventDispatcher },
    { provide: YakRepository, useClass: MemoryYakRepository },
    { provide: InventoryRepository, useClass: MemoryInventoryRespository },
  ],
  exports: [EventDispatcher, YakRepository, InventoryRepository],
})
export class InfraModule {}
