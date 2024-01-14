import { Publisher, Subjects, TicketUpdatedEvent } from '@practicket/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}
