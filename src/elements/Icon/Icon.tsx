import styles from './icon.module.scss';

interface IconProps {
  children: React.SVGProps<SVGSVGElement>;
}

const Icon: React.FC<IconProps> = ({ children }) => {
  return <div className={styles.Icon}>{children}</div>;
};

export default Icon;
