import { Publisher, Subjects, TicketCreatedEvent } from '@practicket/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated
}
