import chemShaaLogo from '../assets/chemshaa-logo.png'

interface BrandLogoProps {
  className?: string
}

export default function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <img
      src={chemShaaLogo}
      alt="ChemShaa"
      className={`block h-auto object-contain ${className}`}
      draggable={false}
    />
  )
}
