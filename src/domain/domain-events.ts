export type DomainEvent = {
  id: string;
  type: string;
};

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
