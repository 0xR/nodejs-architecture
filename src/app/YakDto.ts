import { IsEnum, IsNotEmpty } from 'class-validator';
import { Gender } from '../domain/yak/Gender';

export class YakRequestDto {
  @IsNotEmpty()
  name: string;
  @IsEnum(Gender)
  gender: Gender;
  @IsNotEmpty()
  age: number;
}

export class MilkYakDto {
  @IsNotEmpty()
  yakId: string;
}
