import { Gender } from './Gender';

export type YakRequestDto = {
  name: string;
  gender: Gender;
  age: number;
};

export type YakResponseDto = YakRequestDto & {
  id: string;
};
