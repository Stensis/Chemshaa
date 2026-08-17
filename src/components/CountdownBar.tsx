import { formatDuration } from '../utils/date'

interface CountdownBarProps {
  label: string
  remaining: number
}

export default function CountdownBar({
  label,
  remaining,
}: CountdownBarProps) {
  return (
    <section className="countdown-bar flex shrink-0 flex-col items-center justify-center bg-black px-4 text-center">
      <p className="countdown-label font-normal leading-none text-white">
        {label}
      </p>

      <p
        className="countdown-time font-normal leading-none text-white"
        aria-live="polite"
        aria-atomic="true"
      >
        {formatDuration(remaining)}
      </p>
    </section>
  )
}