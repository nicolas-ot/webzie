import { ReactChild } from 'react';
import { Link } from 'react-router-dom';

interface SidebarItemProps {
  link: string;
  children: ReactChild;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ link, children }) => {
  return (
    <li>
      <div>
        <Link to={link}>{children}</Link>
      </div>
    </li>
  );
};

export default SidebarItem;
