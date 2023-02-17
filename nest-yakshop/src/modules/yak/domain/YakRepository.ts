import { Yak } from './Yak';

export interface YakRepository {
  save(yak: Yak): Promise<Yak>;

  findYak(yakId: string): Promise<Yak | undefined>;

  getAll(): Promise<Yak[]>;
}
