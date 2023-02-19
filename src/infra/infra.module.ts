import { Module } from '@nestjs/common';
import { EventDispatcher } from '../domain/ddd/EventDispatcher';
import { IInventoryRepository } from '../domain/inventory/InventoryRepository';
import { YakRepository } from '../domain/yak/YakRepository';
import { InventoryRepository } from './InventoryRepository';
import { MemoryEventDispatcher } from './memory-event-dispatcher.service';
import { MemoryYakRepository } from './MemoryYakRepository';

@Module({
  imports: [],
  providers: [
    { provide: EventDispatcher, useClass: MemoryEventDispatcher },
    { provide: YakRepository, useClass: MemoryYakRepository },
    { provide: IInventoryRepository, useClass: InventoryRepository },
  ],
  exports: [EventDispatcher, YakRepository, IInventoryRepository],
})
export class InfraModule {}
