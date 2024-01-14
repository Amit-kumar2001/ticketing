import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from '@practicket/common'

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete
}
