import { DomainEvent } from '../domain-events';

export abstract class EventDispatcher {
  abstract dispatch(...domainEvents: DomainEvent[]): Promise<void>;
}
