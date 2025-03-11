import cx from 'classnames'

import { Href } from 'components/navigation'


type LogoProps = {
  className?: string
}

const Logo: React.FC<LogoProps> = (props) => {
  const { className } = props

  return (
    <Href to="/" className={cx('flex items-center', className)}>
      <svg
  width="71"
  height="16"
  viewBox="0 0 71 16"
  xmlns="http://www.w3.org/2000/svg"
>
  <text
    x="0"
    y="12"
    fill="white"
    font-family="sans-serif"
    font-size="12"
    font-weight="bold"
  >
    Vookie
  </text>
</svg>
    </Href>
  )
}

export default Logo
