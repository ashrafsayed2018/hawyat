import Link from 'next/link'

const Button = ({ style, link, text }) => {
  return (
    <Link className={style} href={link} target="_blank">
      {text}
    </Link>
  )
}

export default Button
