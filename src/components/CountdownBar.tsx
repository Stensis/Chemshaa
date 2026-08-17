import { formatDuration } from '../utils/date'

interface CountdownBarProps {
  label: string
  remaining: number
}

export default function CountdownBar({ label, remaining }: CountdownBarProps) {
  return (
    <section className="countdown-bar flex shrink-0 flex-col items-center justify-center bg-black px-4 text-center text-white">
      <p className="countdown-label font-normal leading-none">{label}</p>
      <p
        className="countdown-time font-normal leading-none"
        aria-live="polite"
        aria-atomic="true"
      >
        {formatDuration(remaining)}
      </p>
    </section>
  )
}
