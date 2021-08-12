import React, { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { useTypedSelector } from '../../../hooks/use-typed-selector';
import './layout.scss';

import { ContentProps } from '../Content/Content';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

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
      <Footer />
    </div>
  );
};

export default Layout;
