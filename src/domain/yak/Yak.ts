import { Entity } from '../ddd/Entity';
import { YakMilkedEvent, YakShavedEvent } from '../domain-events'

export enum Gender {
  MALE,
  FEMALE
}

export class Yak extends Entity {

  constructor(
    private id: string,
    private age: number,
    private gender: Gender,
    private name: string,
  ) {
    super();

    if (!name) {
      throw new Error('Name should not be empty')
    }
    if (!id) {
      throw new Error('Id should not be empty')
    }
    if (age < 0) {
      throw new Error('Age should be positive')
    }
    if (age > 100) {
      throw new Error('Age should be less than a 100')
    }
  }

  shave() {
    if (!this.isAlive()) {
      throw new Error('Cannot shave a dead yak')
    }
    const event: YakShavedEvent = {
      id: crypto.randomUUID(),
      yakId: this.id,
    }
    this.domainEvents.push(event)
  }

  milk() {
    if (!this.isAlive()) {
      throw new Error('Cannot milk a dead yak')
    }

    if (this.gender === Gender.MALE) {
      throw new Error('Cannot milk male yaks')
    }

    const event: YakMilkedEvent = {
      id: crypto.randomUUID(),
      yakId: this.id,
    }
    this.domainEvents.push(event)
  }


  isAlive() {
    return this.age < 100;
  }
}
