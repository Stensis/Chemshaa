import type { IconType } from 'react-icons'
import {
  MdArrowBack,
  MdOutlinePhoneAndroid,
  MdOutlineCalendarMonth,
  MdOutlineMail,
  MdOutlineTipsAndUpdates,
  MdOutlineDelete,
  MdLogout,
} from 'react-icons/md'

export type IconName =
  | 'arrow-left'
  | 'phone'
  | 'calendar'
  | 'mail'
  | 'bulb'
  | 'trash'
  | 'logout'

interface IconProps {
  name: IconName
  size?: number
  className?: string
}

const icons: Record<IconName, IconType> = {
  'arrow-left': MdArrowBack,
  phone: MdOutlinePhoneAndroid,
  calendar: MdOutlineCalendarMonth,
  mail: MdOutlineMail,
  bulb: MdOutlineTipsAndUpdates,
  trash: MdOutlineDelete,
  logout: MdLogout,
}

export default function Icon({
  name,
  size = 28,
  className = '',
}: IconProps) {
  const SelectedIcon = icons[name]

  return (
    <SelectedIcon
      size={size}
      className={className}
      aria-hidden="true"
    />
  )
}