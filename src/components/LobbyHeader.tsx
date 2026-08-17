import BrandLogo from './BrandLogo'
import MenuButton from './MenuButton'

interface LobbyHeaderProps {
  onMenuClick: () => void
}

export default function LobbyHeader({ onMenuClick }: LobbyHeaderProps) {
  return (
    <header className="lobby-header">
      <div className="lobby-header-row">
        <BrandLogo className="lobby-logo" />

        <div className="lobby-menu">
          <MenuButton onClick={onMenuClick} />
        </div>
      </div>
    </header>
  )
}