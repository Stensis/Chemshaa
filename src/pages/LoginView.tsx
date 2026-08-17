import { useState, type FormEvent } from 'react'
import AppShell from '../components/AppShell'
import BrandLogo from '../components/BrandLogo'
import { isValidKenyanPhone } from '../utils/phone'

interface LoginViewProps {
  onProceed: (phone: string) => void
}

export default function LoginView({ onProceed }: LoginViewProps) {
  const [phone, setPhone] = useState('')
  const [touched, setTouched] = useState(false)
  const [loading, setLoading] = useState(false)
  const valid = isValidKenyanPhone(phone)
  const containsLetters = /[a-zA-Z]/.test(phone)
  const showError = touched && !valid

  const errorMessage = !phone.trim()
    ? 'Phone number is required.'
    : containsLetters
      ? 'Phone number can only contain numbers.'
      : 'Enter a valid Kenyan phone number, e.g. 0712345678.'

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setTouched(true)
    if (!valid || loading) return

    setLoading(true)
    window.setTimeout(() => onProceed(phone), 700)
  }

  return (
    <AppShell className="page-scroll">
      <div className="login-layout flex min-h-full w-full justify-center">
        <form onSubmit={submit} className="login-form w-full">
          <BrandLogo className="login-logo" />
          <div className="login-divider h-px w-full bg-black/[0.055]" />

          <h1 className="login-title font-normal">
            Please log in using your mobile money phone number.
          </h1>
          <p className="login-subtitle font-normal text-black/50">
            Your prize will be sent to this number if you win.
          </p>

          <label className="login-field relative block">
            <span className="login-floating-label absolute z-10 bg-[#ffda29] font-normal text-black">
              07/01 XX-XXX-XXX
            </span>
            <input
              inputMode="tel"
              autoComplete="tel"
              value={phone}
              disabled={loading}
              onChange={(event) => setPhone(event.target.value)}
              onBlur={() => setTouched(true)}
              aria-label="Mobile money phone number"
              aria-invalid={showError}
              aria-describedby={showError ? 'phone-error' : undefined}
              className={`chem-phone-input login-input w-full bg-[#ffda29] font-normal text-black outline-none ${showError ? 'border-[#ff574d]' : 'border-black'}`}
            />
          </label>

          <div className="login-message-slot">
            {showError && (
              <p id="phone-error" className="login-error font-normal text-[#d93025]">
                {errorMessage}
              </p>
            )}
          </div>

          <p className="login-terms font-normal text-black/50">
            By proceeding, you agree to our{' '}
            <a
              href="https://chemshaa.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-[3px]"
            >
              terms &amp; privacy policy
            </a>
            .
          </p>

          <div className="login-action-slot flex justify-center">
            {loading ? (
              <span className="chem-spinner" role="status" aria-label="Loading" />
            ) : (
              <button
                type="submit"
                disabled={!valid}
                className="login-button bg-white font-normal text-black shadow-[0_14px_24px_rgba(0,0,0,0.22)] transition hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                Proceed
              </button>
            )}
          </div>
        </form>
      </div>
    </AppShell>
  )
}
