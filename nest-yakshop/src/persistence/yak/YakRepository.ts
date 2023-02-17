import { Yak } from '../../domain/yak/Yak';

export interface YakRepository {

  save(yak: Yak): Promise<void>;

  findYak(yakId: string): Yak | null;

}
