import { ReactChild } from 'react';
import styles from './button.module.scss';
import variables from '../../utilities/_variables.module.scss';

interface ButtonProps {
  color?: string;
  children: ReactChild;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  const CSS = {
    backgroundColor: variables['dark-purple'],
    color: 'white',
  };
  return (
    <button style={CSS} className={styles.Button}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
