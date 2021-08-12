import React, { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import './layout.scss';

import { ContentProps } from '../../pages/Main/Content/Content';
import Navbar from '../../pages/Main/Navbar/Navbar';
import Sidebar from '../../pages/Main/Sidebar/Sidebar';

interface LayoutProps {
  children: ReactElement<ContentProps>;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activePage, setActivePage] = useState('Home');
  const mode = useTypedSelector((state) => state.modes.mode);

  useEffect(() => {
    setActivePage('Home');
  }, [mode]);

  // const Content: React.FC<ContentProps> = children;

  return (
    <div className='layout'>
      <Navbar />
      <main className='main-page'>
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
        ></Sidebar>
        {/* <Content activePage={activePage} /> */}
        {React.cloneElement(children, { activePage: activePage })}
      </main>
    </div>
  );
};

export default Layout;
