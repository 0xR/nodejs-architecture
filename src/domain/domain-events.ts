export enum Gender {
  MALE,
  FEMALE
}

export type DomainEvent = {
  id: string
}

export type HerdCreatedEvent = {
  yak: {
    name: string;
    age: number;
    gender: Gender
  }[]
} & DomainEvent;


export type YakMilkedEvent = {
  yakId: string
} & DomainEvent;

export type YakShavedEvent = {
  yakId: string
} & DomainEvent;


export type YakDiedEvent = {
  yakId: string
} & DomainEvent;
