import { ReactChild } from 'react';
import './sidebar.scss';

interface SidebarProps {
  children: ReactChild;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className='sidebar-wrapper'>
      <div>{children}</div>
    </div>
  );
};

export default Sidebar;
