import type { ReactNode } from 'react'

interface AppShellProps {
  children: ReactNode
  className?: string
}

export default function AppShell({
  children,
  className = '',
}: AppShellProps) {
  return (
    <main
      className={`
        relative
        h-screen
        h-dvh
        w-full
        overflow-hidden
        bg-[#ffda29]
        text-black
        ${className}
      `}
    >
      {children}
    </main>
  )
}