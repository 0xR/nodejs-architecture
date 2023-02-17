import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { YakService } from '../domain/yak/YakService';

@Controller('yak')
export class YakController {
  constructor(private readonly yakService: YakService) {}

  @Post('milk/:id')
  async milkYak(@Body() milkYakDto: { yakId: string }): Promise<void> {
    console.log(milkYakDto);
    return this.yakService.milkYak(milkYakDto);
  }
}
