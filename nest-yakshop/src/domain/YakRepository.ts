import { Yak } from './Yak';

export abstract class YakRepository {
  abstract save(yak: Yak): Promise<Yak>;

  abstract findYak(yakId: string): Promise<Yak | undefined>;

  abstract getAll(): Promise<Yak[]>;
}
