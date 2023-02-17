import { Module } from '@nestjs/common';
import { YakController } from './yak.controller';
import { YakService } from './yak.service';

@Module({
  controllers: [YakController],
  providers: [YakService]
})
export class YakModule {}
