import cx from 'classnames'
import { Href } from 'components/navigation'


type LogoProps = {
  className?: string
}

const Logo: React.FC<LogoProps> = (props) => {
  const { className } = props

  return (
    <Href to="/" className={cx('flex items-center', className)}>
      <svg width="125" height="75">
        <image xlinkHref="Vector.png" width="125" height="75" />
      </svg>
    </Href>
  )
}

export default Logo
