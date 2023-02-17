import { Module } from '@nestjs/common';
import { YakController } from './yak.controller';
import { YakService } from './domain/YakService';
import { YAK_REPOSITORY } from './domain/yak.di-tokens';

import { MemoryYakRepository } from './persistence/MemoryYakRepository';
// import { EventDispatcher } from '../domain/EventDispatcher';
import { EVENT_DISPATCHER } from '../../domain/domain.di-tokens';
import { EventDispatcher } from '../../EventDispatcher';

@Module({
  controllers: [YakController],
  providers: [
    YakService,
    { provide: YAK_REPOSITORY, useClass: MemoryYakRepository },
    { provide: EVENT_DISPATCHER, useClass: EventDispatcher },
  ],
})
export class YakModule {}
