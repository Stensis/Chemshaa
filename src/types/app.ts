export type AppScreen = 'lobby' | 'more' | 'login' | 'verify'

export interface Profile {
  phoneNumber: string
  joinedOn: string
  contactEmail: string
  xHandle: string
}

export interface LobbyCopy {
  rulesTitle: string
  rules: string[]
  eliminatedMessage: string
  feedbackLabel: string
  countdownLabel: string
}
