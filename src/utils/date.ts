
export function formatDuration(milliseconds: number): string {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000))
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return [hours, minutes, seconds]
    .map((part) => String(part).padStart(2, '0'))
    .join(':')
}

export function generateOtp(): string {
  return String(Math.floor(100000 + Math.random() * 900000))
}

export function getNextShowAtTime(
  hour: number,
  minute = 0
): Date {
  const now = new Date()

  const target = new Date()
  target.setHours(hour, minute, 0, 0)

  if (target.getTime() <= now.getTime()) {
    target.setDate(target.getDate() + 1)
  }

  return target
}