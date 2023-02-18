import { Module } from '@nestjs/common';
import { EventDispatcher } from '../domain/EventDispatcher';
import { YakRepository } from '../domain/YakRepository';
import { MemoryEventDispatcher } from './memory-event-dispatcher.service';
import { MemoryYakRepository } from './MemoryYakRepository';

@Module({
  imports: [],
  providers: [
    { provide: EventDispatcher, useClass: MemoryEventDispatcher },
    { provide: YakRepository, useClass: MemoryYakRepository },
  ],
  exports: [EventDispatcher, YakRepository],
})
export class InfraModule {}
