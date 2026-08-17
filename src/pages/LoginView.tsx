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
  const [focused, setFocused] = useState(false)
  const [loading, setLoading] = useState(false)

  const valid = isValidKenyanPhone(phone)
  const containsLetters = /[a-zA-Z]/.test(phone)
  const containsWhitespace = /\s/.test(phone)
  const containsInvalidSymbols = /[^\d+]/.test(phone)
  const showError = touched && !valid
  const floatLabel = focused || phone.length > 0

  const errorMessage = !phone
    ? 'Phone number is required.'
    : containsWhitespace
      ? 'Phone number cannot contain spaces.'
      : containsLetters
        ? 'Phone number can only contain numbers.'
        : containsInvalidSymbols
          ? 'Enter a valid phone number using digits only.'
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
        <form onSubmit={submit} className="login-form w-full" noValidate>
          <BrandLogo className="login-logo" />
          <div className="login-divider h-px w-full bg-black/[0.055]" />

          <h1 className="login-title">
            Please log in using your mobile money phone number.
          </h1>
          <p className="login-subtitle text-black/50">
            Your prize will be sent to this number if you win.
          </p>

          <label className="login-field relative block">
            {floatLabel && (
              <span className="login-floating-label pointer-events-none absolute z-10 bg-[#ffda29] text-black">
                07/01 XX-XXX-XXX
              </span>
            )}

            <input
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              maxLength={14}
              value={phone}
              placeholder={floatLabel ? '' : '07/01 XX-XXX-XXX'}
              disabled={loading}
              onFocus={() => setFocused(true)}
              onChange={(event) => setPhone(event.target.value)}
              onBlur={() => {
                setFocused(false)
                setTouched(true)
              }}
              aria-label="Mobile money phone number"
              aria-invalid={showError}
              aria-describedby={showError ? 'phone-error' : undefined}
              className={`chem-phone-input login-input w-full bg-[#ffda29] text-black outline-none transition-colors duration-150 ${showError ? 'border-[#ff574d]' : 'border-black'}`}
            />
          </label>

          <div className="login-message-slot">
            {showError && (
              <p id="phone-error" className="login-error text-[#d93025]">
                {errorMessage}
              </p>
            )}
          </div>

          <p className="login-terms text-black/50">
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
                className="login-button bg-white text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#ffda29]"
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
