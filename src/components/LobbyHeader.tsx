import BrandLogo from './BrandLogo'
import MenuButton from './MenuButton'

interface LobbyHeaderProps {
  onMenuClick: () => void
}

export default function LobbyHeader({ onMenuClick }: LobbyHeaderProps) {
  return (
    <header className="lobby-header relative flex shrink-0 items-start justify-center">
      <BrandLogo className="lobby-logo" />
      <div className="lobby-menu absolute">
        <MenuButton onClick={onMenuClick} />
      </div>
    </header>
  )
}
