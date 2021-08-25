import { ReactNode } from 'react';
import variables from '../../utilities/_variables.module.scss';

interface ButtonProps {
  color?: string;
  backgroundColor?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color,
  backgroundColor,
  className,
}) => {
  let buttonColor;
  switch (backgroundColor) {
    case 'dark-green':
      buttonColor = variables['dark-green'];
      break;
    default:
      buttonColor = variables['dark-purple'];
  }
  const CSS = {
    backgroundColor: buttonColor,
    color: color || 'white',
    border: 'none',
    borderRadius: '90px',
    padding: '2px 1em',
    flexShrink: 0,
    cursor: typeof onClick === 'function' ? 'pointer' : 'default',
  };
  return (
    <button
      style={CSS}
      className={className}
      onClick={typeof onClick === 'function' ? () => onClick() : undefined}
    >
      {children}
    </button>
  );
};

export default Button;
