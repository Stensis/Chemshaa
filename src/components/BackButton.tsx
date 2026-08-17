import Icon from './Icon'

interface BackButtonProps {
  onClick: () => void
  label?: string
  className?: string
}

export default function BackButton({ onClick, label = 'Go back', className = '' }: BackButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`back-button flex items-center justify-center rounded-full text-black transition hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/70 ${className}`}
    >
      <Icon name="arrow-left" className="h-full w-full" />
    </button>
  )
}
