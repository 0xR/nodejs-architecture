import { randomUUID } from 'node:crypto';

import { Entity } from '../ddd/Entity';
import { YakMilkedEvent, YakShavedEvent } from '../domain-events';
import { Gender } from './Gender';

export class Yak extends Entity {
  readonly id: string = randomUUID();
  readonly name: string;
  readonly gender: Gender;
  readonly age: number;

  constructor(partial: Partial<Yak>) {
    super();
    Object.assign(this, partial);

    if (!this.name) {
      throw new Error('Name should not be empty');
    }
    if (!this.id) {
      throw new Error('Id should not be empty');
    }
    if (this.gender === undefined) {
      throw new Error('Gender should be defined');
    }
    if (typeof this.age !== 'number') {
      throw new Error('Age should be a number');
    }
    if (this.age < 0) {
      throw new Error('Age should be positive');
    }
    if (this.age > 100) {
      throw new Error('Age should be less than a 100');
    }
  }

  shave() {
    if (!this.isAlive()) {
      throw new Error('Cannot shave a dead yak');
    }
    const event: YakShavedEvent = {
      type: 'YakShavedEvent',
      id: crypto.randomUUID(),
      yakId: this.id,
    };
    this.domainEvents.push(event);
  }

  milk() {
    if (!this.isAlive()) {
      throw new Error('Cannot milk a dead yak');
    }

    if (this.gender === Gender.MALE) {
      throw new Error('Cannot milk male yaks');
    }

    const event: YakMilkedEvent = {
      type: 'YakMilkedEvent',
      id: randomUUID(),
      yakId: this.id,
      liters: this.getMilkCapacity(),
    };
    this.domainEvents.push(event);
  }

  isAlive() {
    return this.age < 100;
  }

  private getMilkCapacity() {
    return 50 - 0.03 * this.age;
  }
}
