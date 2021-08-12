import { ReactNode } from 'react';
import styles from './button.module.scss';
import variables from '../../utilities/_variables.module.scss';

interface ButtonProps {
  color?: string;
  backgroundColor?: string;
  className?: string;
  children: ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color,
  backgroundColor,
  className,
}) => {
  const CSS = {
    backgroundColor: backgroundColor || variables['dark-purple'],
    color: color || 'white',
    border: 'none',
    borderRadius: '90px',
    padding: '2px 1em',
    flexShrink: 0,
    cursor: 'pointer',
  };
  return (
    <button style={CSS} className={className} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default Button;
