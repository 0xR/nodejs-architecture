import { EventDispatcher } from '../EventDispatcher';
import { Gender } from './Gender';
import { Yak } from './Yak';
import { YakRepository } from './YakRepository';

type MilkYakCommand = {}

type ShaveYakCommand = {}


type CreateYakCommand = {
  age: number,
  name: string,
  gender: Gender
};

export class YakService {
  constructor(private yakRepository: YakRepository, private eventDispatcher: EventDispatcher) {
  }

  async createYak({
                    age, name, gender
                  }: CreateYakCommand) {
    const yak = new Yak(undefined, name, gender, age)
    await this.yakRepository.save(yak);
    await this.eventDispatcher.dispatch(yak.takeDomainEvents())
  }

  async milkYak(milkCommand: MilkYakCommand) {

  }

  async shave(shaveCommand: ShaveYakCommand) {

  }
}
