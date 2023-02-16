import { Yak } from './Yak';

export interface YakRepository {

  save(yak: Yak): Promise<void>;

  findYak(yakId: string): Yak | null;

}
