import { DomainEvent } from '../../nest-yakshop/src/domain/domain-events';

export interface EventDispatcher {
  dispatch(...domainEvents: DomainEvent[]): Promise<void>;
}
