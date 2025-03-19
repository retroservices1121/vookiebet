import cx from 'classnames';
import { Href } from 'components/navigation';
import 'src/components/ui/styles.css';


type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = (props) => {
  const { className } = props;

  return (
    <Href to="/" className={cx('flex items-center justify-center', className)}>
      <span className="font-rookie text-white text-vookie">
        VOOKIE
      </span>
    </Href>
  );
};

export default Logo;
