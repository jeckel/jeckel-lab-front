// eslint-disable-next-line no-shadow
export enum FlashMessageLevel {
  success = 'success',
  warning = 'warning',
  error = 'error',
}

export interface FlashMessage {
  message: string
  level: FlashMessageLevel
}
