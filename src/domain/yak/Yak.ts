import { Event, YakMilkedEvent, YakShavedEvent } from '../events'

export enum Gender {
  MALE,
  FEMALE
}

export class Yak {
  private events: Event[] = [];

  constructor(
    private id: string,
    private age: number,
    private gender: Gender,
    private name: string,
  ) {
  }

  shave() {
    if(!this.isAlive()){
      throw new Error('Cannot shave a dead yak')
    }
    const event: YakShavedEvent = {
      id: crypto.randomUUID(),
      yakId: this.id,
    }
    this.events.push(event)
  }

  milk() {
    if(!this.isAlive()){
      throw new Error('Cannot milk a dead yak')
    }

    if(this.gender === Gender.MALE){
      throw new Error('Cannot milk male yaks')
    }

    const event: YakMilkedEvent = {
      id: crypto.randomUUID(),
      yakId: this.id,
    }
    this.events.push(event)
  }

  takeEvents() {
    const events = this.events;
    this.events = [];
    return events;
  }

  isAlive() {
    return this.age < 100;
  }
}
