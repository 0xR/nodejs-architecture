import { DomainEvent } from '../../../nest-yakshop/src/domain/domain-events';

export class Entity {
  protected domainEvents: DomainEvent[] = [];

  takeDomainEvents() {
    const events = this.domainEvents;
    this.domainEvents = [];
    return events;
  }
}
