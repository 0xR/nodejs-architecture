import { DomainEvent } from './domain-events';

export interface EventDispatcher {
  dispatch(...domainEvents: DomainEvent[]): Promise<void>;
}
