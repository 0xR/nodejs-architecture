import { Controller, Get, Post, Body } from '@nestjs/common';
import { YakService } from '../domain/YakService';
import { YakRequestDto, YakResponseDto } from '../domain/YakDto';

@Controller('yak')
export class YakController {
  constructor(private readonly yakService: YakService) {}

  @Get()
  async getHerd(): Promise<YakResponseDto[]> {
    return this.yakService.getHerd();
  }

  @Post()
  async createHerd(@Body() createHerdDto: YakRequestDto[]): Promise<void> {
    createHerdDto.forEach((yakDto) => this.yakService.createYak(yakDto));
  }

  @Post('milk/:id')
  async milkYak(@Body() milkYakDto: { yakId: string }): Promise<void> {
    console.log(milkYakDto);
    return this.yakService.milkYak(milkYakDto);
  }
}
