import { Injectable } from '@nestjs/common';
import { EventDispatcher } from '../ddd/EventDispatcher';
import { Gender } from './Gender';
import { Yak } from './Yak';
import { YakRepository } from './YakRepository';

type MilkYakCommand = {
  readonly yakId: string;
};

type ShaveYakCommand = {
  readonly yakId: string;
};

type CreateYakCommand = {
  age: number;
  name: string;
  gender: Gender;
};

@Injectable()
export class YakService {
  constructor(
    private yakRepository: YakRepository,
    private eventDispatcher: EventDispatcher,
  ) {}

  async getHerd() {
    return this.yakRepository.getAll();
  }

  async createYak({ age, name, gender }: CreateYakCommand) {
    const yak = new Yak(undefined, name, gender, age);
    await this.yakRepository.save(yak);
    await this.eventDispatcher.dispatch(...yak.takeDomainEvents());
  }

  async milkYak({ yakId }: MilkYakCommand) {
    const yak = await this.getYak(yakId);

    yak.milk();
    await this.eventDispatcher.dispatch(...yak.takeDomainEvents());
  }

  async shave({ yakId }: ShaveYakCommand) {
    const yak = await this.getYak(yakId);
    yak.shave();
    await this.eventDispatcher.dispatch(...yak.takeDomainEvents());
  }

  private getYak(yakId: string) {
    const yak = this.yakRepository.findYak(yakId);
    if (!yak) {
      throw new Error(`Yak not found with id ${yakId}`);
    }
    return yak;
  }
}