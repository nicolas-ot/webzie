import { useEffect, useState } from 'react';
import { useTypedSelector } from '../../../hooks/use-typed-selector';
import './layout.scss';

import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

const Layout = () => {
  const [activePage, setActivePage] = useState('Home');
  const mode = useTypedSelector((state) => state.modes.mode);

  useEffect(() => {
    setActivePage('Home');
  }, [mode]);

  return (
    <div className='layout'>
      <Navbar />
      <main className='main-page'>
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
        ></Sidebar>
        <Content activePage={activePage}></Content>
      </main>
    </div>
  );
};

export default Layout;
