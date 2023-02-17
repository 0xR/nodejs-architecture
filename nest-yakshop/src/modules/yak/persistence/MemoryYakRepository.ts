import { Yak } from '../domain/Yak';
import { YakRepository } from '../domain/YakRepository';

import { Injectable } from '@nestjs/common';

@Injectable()
export class MemoryYakRepository implements YakRepository {
  private db = new Map();
  // constructor(private db: Map<string, Yak>) {}

  async findYak(yakId: string): Promise<Yak | undefined> {
    return this.db.get(yakId);
  }

  async save(yak: Yak): Promise<Yak> {
    this.db.set(yak.id, yak);
    return yak;
  }

  async getAll(): Promise<Yak[]> {
    return Array.from(this.db, ([_, yak]) => yak);
  }
}
