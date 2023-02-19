import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  ParseArrayPipe,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { YakRepository } from '../domain/yak/YakRepository';
import { YakService } from '../domain/yak/YakService';
import { MilkYakDto, YakRequestDto } from './YakDto';

@Controller('yak')
@UseInterceptors(ClassSerializerInterceptor)
export class YakController {
  constructor(
    private yakService: YakService,
    private yakRepository: YakRepository,
  ) {
  }

  @Get()
  async getHerd() {
    return this.yakService.getHerd();
  }

  @Get(':id')
  async getYak(@Param('id') id: string) {
    return this.yakRepository.findYak(id);
  }

  @Post()
  async createHerd(
    @Body(new ParseArrayPipe({ items: YakRequestDto }))
      createYakRequests: YakRequestDto[]): Promise<void> {
    createYakRequests.forEach((createYakRequest) => this.yakService.createYak(createYakRequest));
  }

  @Post('milk')
  async milkYak(@Body() milkYakDto: MilkYakDto): Promise<void> {
    return this.yakService.milkYak(milkYakDto);
  }
}
