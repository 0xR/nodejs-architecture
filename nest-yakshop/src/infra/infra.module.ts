import { Module } from '@nestjs/common';
import { EVENT_DISPATCHER, YAK_REPOSITORY } from '../domain/domain.di-tokens';
import { EventDispatcher } from './EventDispatcher';
import { MemoryYakRepository } from './MemoryYakRepository';

@Module({
  imports: [],
  providers: [
    { provide: EVENT_DISPATCHER, useClass: EventDispatcher },
    { provide: YAK_REPOSITORY, useClass: MemoryYakRepository },
  ],
  exports: [EVENT_DISPATCHER, YAK_REPOSITORY],
})
export class InfraModule {}
