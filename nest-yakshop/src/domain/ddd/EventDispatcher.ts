import { YakMilkedEvent } from '../domain-events';
import * as DomainEvents from '../domain-events';

export abstract class EventDispatcher {
  abstract dispatch(...domainEvents: (typeof DomainEvents)[]): Promise<void>;

  listen: (
    type: YakMilkedEvent['type'],
    fn: (event: YakMilkedEvent) => void,
  ) => void;
}
