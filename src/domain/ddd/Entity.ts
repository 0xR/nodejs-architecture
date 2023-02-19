import { Exclude } from 'class-transformer';
import { DomainEvent } from '../domain-events';

export class Entity {
  @Exclude()
  protected domainEvents: DomainEvent[] = [];

  takeDomainEvents() {
    const events = this.domainEvents;
    this.domainEvents = [];
    return events;
  }
}
