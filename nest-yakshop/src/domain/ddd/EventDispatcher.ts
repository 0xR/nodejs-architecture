import { DomainEvent, YakMilkedEvent } from '../domain-events';

export abstract class EventDispatcher {
  abstract dispatch(...domainEvents: DomainEvent[]): Promise<void>;

  listen: (
    type: YakMilkedEvent['type'],
    fn: (event: YakMilkedEvent) => void,
  ) => void;
}
