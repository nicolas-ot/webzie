import { ReactNode } from 'react';
import styles from './button.module.scss';
import variables from '../../utilities/_variables.module.scss';

interface ButtonProps {
  color?: string;
  children: ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  const CSS = {
    backgroundColor: variables['dark-purple'],
    color: 'white',
  };
  return (
    <button style={CSS} className={styles.Button} onClick={() => onClick()}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
