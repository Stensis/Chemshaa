import { useCallback, useMemo, useState } from 'react'
import profileData from './data/profile.json'
import type { AppScreen, Profile } from './types/app'
import WaitingLobby from './pages/WaitingLobby'
import MoreView from './pages/MoreView'
import LoginView from './pages/LoginView'
import VerifyView from './pages/VerifyView'
import { generateOtp } from './utils/date'

export default function App() {
  const profile = profileData as Profile
  const [screen, setScreen] = useState<AppScreen>('lobby')
  const [otp, setOtp] = useState('000000')

  const goToLobby = useCallback(() => setScreen('lobby'), [])
  const goToLogin = useCallback(() => setScreen('login'), [])
  const goToMore = useCallback(() => setScreen('more'), [])

  const startVerification = useCallback((_phone: string) => {
    setOtp(generateOtp())
    setScreen('verify')
  }, [])

  const currentView = useMemo(() => {
    switch (screen) {
      case 'more':
        return <MoreView profile={profile} onBack={goToLobby} onLogout={goToLogin} />
      case 'login':
        return <LoginView onProceed={startVerification} />
      case 'verify':
        return <VerifyView otp={otp} onBack={goToLogin} onVerified={goToLobby} />
      case 'lobby':
      default:
        return <WaitingLobby onOpenMenu={goToMore} />
    }
  }, [goToLobby, goToLogin, goToMore, otp, profile, screen, startVerification])

  return currentView
}
