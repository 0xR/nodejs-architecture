export enum Gender {
  MALE,
  FEMALE
}

export type Event = {
  id: string
}

export type HerdCreatedEvent = {
  yak: {
    name: string;
    age: number;
    gender: Gender
  }[]
} & Event;


export type YakMilkedEvent = {
  yakId: string
} & Event;

export type YakShavedEvent = {
  yakId: string
} & Event;


export type YakDiedEvent = {
  yakId: string
} & Event;
