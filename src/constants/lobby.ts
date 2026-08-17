import type { LobbyCopy } from '../types/app'

export const SHOW_TIME = {
  hour: 14,
  minute: 0,
} as const

export const LOBBY_COPY: LobbyCopy = {
  rulesTitle: 'Live Trivia Show Rules:',
  rules: [
    'Answer 10 multiple-choice questions correctly during the live trivia show to win cash prizes deposited directly into your mobile money account. Please note: the cash prize is divided equally among all winners.',
    "You're eliminated if you answer incorrectly, skip questions, or don't answer at all.",
  ],
  eliminatedMessage:
    'Eliminated? No worries—you can still earn points for correct answers. Stay tuned; something extra sweet is coming soon.',
  feedbackLabel: 'Share your feedback on our app',
  countdownLabel: 'The next live trivia show begins in',
}
