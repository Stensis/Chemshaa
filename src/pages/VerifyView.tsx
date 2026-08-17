import { useEffect } from 'react'
import AppShell from '../components/AppShell'
import BackButton from '../components/BackButton'

interface VerifyViewProps {
  otp: string
  onBack: () => void
  onVerified: () => void
}

export default function VerifyView({ otp, onBack, onVerified }: VerifyViewProps) {
  useEffect(() => {
    const timer = window.setTimeout(onVerified, 1400)
    return () => window.clearTimeout(timer)
  }, [onVerified])

  return (
    <AppShell>
      <BackButton onClick={onBack} className="verify-back absolute" />

      <section className="verify-layout mx-auto flex h-full w-full flex-col items-center justify-center text-center">
        <div className="verify-copy w-full">
          <h1 className="verify-title font-normal">Verify that it&apos;s you.</h1>
          <p className="verify-subtitle mx-auto font-normal">
            We sent an SMS verification code to the phone number you entered.
          </p>
        </div>

        <div className="verify-code-wrap">
          <div className="verify-code" aria-label={`Verification code ${otp}`}>{otp}</div>
          <div className="verify-line" />
        </div>

        <span className="chem-spinner verify-spinner" role="status" aria-label="Verifying" />
      </section>
    </AppShell>
  )
}
