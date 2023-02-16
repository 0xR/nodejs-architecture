export enum Gender {
  MALE,
  FEMALE,
}

export type DomainEvent = {
  id: string;
};

export type HerdCreatedEvent = {
  type: 'HerdCreatedEvent';
  yak: {
    name: string;
    age: number;
    gender: Gender;
  }[];
} & DomainEvent;

export type YakMilkedEvent = {
  type: 'YakMilkedEvent';
  yakId: string;
  liters: number;
} & DomainEvent;

export type YakShavedEvent = {
  type: 'YakShavedEvent';
  yakId: string;
} & DomainEvent;

export type YakDiedEvent = {
  type: 'YakDiedEvent';
  yakId: string;
} & DomainEvent;
