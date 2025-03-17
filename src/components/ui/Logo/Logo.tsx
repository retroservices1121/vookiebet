import cx from 'classnames'
import { Href } from 'components/navigation'


type LogoProps = {
  className?: string
}

const Logo: React.FC<LogoProps> = (props) => {
  const { className } = props

  return (
    <Href to="/" className={cx('flex items-center', className)}>
      <svg width="71" height="16">
        <image href="Vector.png" width="71" height="16" />
      </svg>
    </Href>
  )
}

export default Logo
