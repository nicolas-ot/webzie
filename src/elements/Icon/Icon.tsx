import styles from './icon.module.scss';

interface IconProps {
  children: React.SVGProps<SVGSVGElement>;
}

const Icon: React.FC<IconProps> = ({ children }) => {
  return (
    <div className={styles.Icon}>
      <a href='dummy'>{children}</a>
    </div>
  );
};

export default Icon;
