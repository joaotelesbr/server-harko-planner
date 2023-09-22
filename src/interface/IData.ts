interface IData {
  eventName: string;
  userEmail: string;
  toEmail: string;
}

export interface IEventData extends IData {
  dateTime: string;
  meetingTime: string;
}

export interface IEmailData extends IData {
  icsFileName?: string;
  icsContent?: string;
}
