interface MenuButtonProps {
  onClick: () => void
}

export default function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <button
      type="button"
      aria-label="Open account menu"
      onClick={onClick}
      className="group flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/70"
    >
      <span className="flex flex-col gap-[3px]" aria-hidden="true">
        {[0, 1, 2].map((dot) => (
          <span key={dot} className="h-[4px] w-[4px] rounded-full bg-black transition-transform group-hover:scale-110" />
        ))}
      </span>
    </button>
  )
}
