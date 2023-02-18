import { Module } from '@nestjs/common';
import { EVENT_DISPATCHER, YAK_REPOSITORY } from '../domain/domain.di-tokens';
import { MemoryEventDispatcher } from './memory-event-dispatcher.service';
import { MemoryYakRepository } from './MemoryYakRepository';

@Module({
  imports: [],
  providers: [
    { provide: EVENT_DISPATCHER, useClass: MemoryEventDispatcher },
    { provide: YAK_REPOSITORY, useClass: MemoryYakRepository },
  ],
  exports: [EVENT_DISPATCHER, YAK_REPOSITORY],
})
export class InfraModule {}
