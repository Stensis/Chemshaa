import { useEffect, useState } from 'react'
import CountdownBar from '../components/CountdownBar'
import LobbyHeader from '../components/LobbyHeader'
import LobbyIntro from '../components/LobbyIntro'
import RulesSection from '../components/RulesSection'
import { LOBBY_COPY, SHOW_TIME } from '../constants/lobby'
import { useCountdown } from '../hooks/useCountdown'
import { getNextShowAtTime } from '../utils/date'

interface WaitingLobbyProps {
  onOpenMenu: () => void
}

export default function WaitingLobby({ onOpenMenu }: WaitingLobbyProps) {
  const [targetDate, setTargetDate] = useState(() =>
    getNextShowAtTime(SHOW_TIME.hour, SHOW_TIME.minute),
  )

  const remaining = useCountdown(targetDate)

  // If the page stays open through show time, immediately roll the timer to
  // the next day's show instead of leaving the lobby stuck at 00:00:00.
  useEffect(() => {
    if (remaining !== 0) return

    setTargetDate(getNextShowAtTime(SHOW_TIME.hour, SHOW_TIME.minute))
  }, [remaining])

  return (
    <main className="lobby-screen bg-[#ffda29] text-black">
      <LobbyHeader onMenuClick={onOpenMenu} />

      <div className="lobby-main-content">
        <LobbyIntro />
        <RulesSection />
        <div className="lobby-bottom-space" aria-hidden="true" />
      </div>

      <CountdownBar
        label={LOBBY_COPY.countdownLabel}
        remaining={remaining}
      />

      <div className="lobby-after-countdown" aria-hidden="true" />
    </main>
  )
}
