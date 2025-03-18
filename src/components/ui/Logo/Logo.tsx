import cx from 'classnames'
import { Href } from 'components/navigation'
import './styles.css'


type LogoProps = {
  className?: string
}

const Logo: React.FC<LogoProps> = (props) => {
  const { className } = props

  return (
    <Href to="/" className={cx('flex items-center', className)}>
      <span className="font-rookie text-white text-2xl">
        VOOKIE
      </span>

    </Href>
  )
}

export default Logo
