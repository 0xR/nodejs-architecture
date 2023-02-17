import { Yak } from '../domain/yak/Yak';
import { YakRepository } from '../domain/yak/YakRepository';

export class MemoryYakRepository implements YakRepository {
  constructor(private db: Map<string, Yak>) {
  }

  async findYak(yakId: string): Promise<Yak | undefined> {
    return this.db.get(yakId);
  }

  async save(yak: Yak): Promise<void> {
    this.db.set(yak.id, yak);
  }

}
