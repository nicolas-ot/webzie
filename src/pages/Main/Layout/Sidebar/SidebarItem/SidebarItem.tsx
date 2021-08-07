import { ReactChild } from 'react';
import { Link } from 'react-router-dom';
import './sidebarItem.scss';

interface SidebarItemProps {
  link: string;
  svg: React.SVGProps<SVGSVGElement>;
  children: ReactChild;
  active: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  svg,
  link,
  children,
  active,
  onClick,
}) => {
  return (
    <li
      className={'sidebar-item ' + (active ? 'active' : '')}
      onClick={() => onClick()}
    >
      <div>
        <Link to={'/'}>
          <div className='sidebar-link-wrapper'>
            {svg}
            <span>{children}</span>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default SidebarItem;
