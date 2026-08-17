import { useEffect, useState } from 'react'

export function useCountdown(targetDate: Date): number {
  const targetTime = targetDate.getTime()

  const calculateRemaining = () =>
    Math.max(0, targetTime - Date.now())

  const [remaining, setRemaining] = useState<number>(
    calculateRemaining
  )

  useEffect(() => {
    const updateCountdown = () => {
      const nextRemaining = Math.max(
        0,
        targetTime - Date.now()
      )

      setRemaining(nextRemaining)
    }

    updateCountdown()

    const timer = window.setInterval(
      updateCountdown,
      1000
    )

    return () => {
      window.clearInterval(timer)
    }
  }, [targetTime])

  return remaining
}