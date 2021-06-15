export interface ContactFormApiResponse {
  success: boolean
  message: string
}

export interface ContactFormMessageType {
  fromName: string,
  fromEmail: string,
  subject: string,
  content: string,
}

// eslint-disable-next-line no-shadow
export enum ApiResponseResultType {
  Success,
  Failed,
}
