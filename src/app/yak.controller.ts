import {
  BadRequestException,
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  ParseArrayPipe,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { Yak } from '../domain/yak/Yak';
import { YakRepository } from '../domain/yak/YakRepository';
import { YakService } from '../domain/yak/YakService';
import { MilkYakDto, YakRequestDto } from './YakDto';

@Controller('yak')
@UseInterceptors(ClassSerializerInterceptor)
export class YakController {
  constructor(
    private yakService: YakService,
    private yakRepository: YakRepository,
  ) {}

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
    createHerdDto: YakRequestDto[]): Promise<void> {
    let yaks: Yak[] | undefined;
    try {
      yaks = createHerdDto.map((yak) => new Yak(yak));
    } catch (e) {
      throw new BadRequestException(e.message);
    }
    if (!yaks) {
      throw new InternalServerErrorException();
    }

    yaks.forEach((yak) => this.yakService.createYak(yak));
  }

  @Post('milk')
  async milkYak(@Body() milkYakDto: MilkYakDto): Promise<void> {
    return this.yakService.milkYak(milkYakDto);
  }
}
