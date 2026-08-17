import type { ReactNode } from 'react'
import Icon from './Icon'

type ProfileIcon = 'phone' | 'calendar' | 'mail' | 'bulb' | 'trash' | 'logout'

interface ProfileRowProps {
  icon: ProfileIcon
  label: ReactNode
  value?: string
  tone?: 'default' | 'danger'
  onClick?: () => void
}

export default function ProfileRow({
  icon,
  label,
  value,
  tone = 'default',
  onClick,
}: ProfileRowProps) {
  const danger = tone === 'danger'

  const content = (
    <div className={`profile-row flex w-full items-start text-left ${danger ? 'text-[#ff574d]' : 'text-black'}`}>
      <div className="profile-icon shrink-0">
        <Icon name={icon} className="h-full w-full" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="profile-label font-normal">{label}</div>
        {value && <div className="profile-value font-normal text-black/50">{value}</div>}
      </div>
    </div>
  )

  if (!onClick) return content

  return (
    <button
      type="button"
      onClick={onClick}
      className="profile-button w-full rounded-xl text-left transition hover:bg-black/[0.035] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/60"
    >
      {content}
    </button>
  )
}
