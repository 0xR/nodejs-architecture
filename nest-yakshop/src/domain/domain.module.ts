import { Module } from '@nestjs/common';
import { InfraModule } from '../infra/infra.module';
import { YakService } from './YakService';

@Module({
  imports: [InfraModule],
  providers: [YakService],
  exports: [YakService],
})
export class DomainModule {}
