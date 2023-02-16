export enum Gender {
  MALE,
  FEMALE,
}

export type DomainEvent = {
  id: string;
  type: string;
};

export type HerdCreatedEvent = {
  yak: {
    name: string;
    age: number;
    gender: Gender;
  }[];
} & DomainEvent;

export type YakMilkedEvent = {
  yakId: string;
  liters: number;
} & DomainEvent;

export type YakShavedEvent = {
  yakId: string;
} & DomainEvent;

export type YakDiedEvent = {
  yakId: string;
} & DomainEvent;
