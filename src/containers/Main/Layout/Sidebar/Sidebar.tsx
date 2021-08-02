import { ReactChild } from 'react';

interface SidebarProps {
  children: ReactChild;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default Sidebar;
