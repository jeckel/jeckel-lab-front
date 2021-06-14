export interface ContactMessageType {
  fromName: string,
  fromEmail: string,
  subject: string,
  content: string,
}

// eslint-disable-next-line no-shadow
export enum FlashMessageTypes {
  'error',
  'success'
}
