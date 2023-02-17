import { DomainEvent } from '../domain-events';

export class Entity {
  protected domainEvents: DomainEvent[] = [];

  takeDomainEvents() {
    const events = this.domainEvents;
    this.domainEvents = [];
    return events;
  }
}
