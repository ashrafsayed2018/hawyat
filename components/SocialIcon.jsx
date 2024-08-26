import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const SocialIcon = ({ link }) => {
  return (
    <Link href={link.href}>
      <FontAwesomeIcon
        icon={link.icon}
        className="w-6 h-6"
        style={{
          color: link.color,
        }}
      />
    </Link>
  )
}

export default SocialIcon
