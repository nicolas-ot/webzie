import { useState } from 'react';
import './layout.scss';

import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

const Layout = () => {
  const [activePage, setActivePage] = useState('Home');

  const renderMainPage = () => {
    switch (activePage) {
      case 'Home':
        return <div>main</div>;
      case 'My Calendar':
        return <div>main2</div>;
      case 'Badges':
        return <div>mai3n</div>;
      case 'My Webinars':
        return <div>ma4in</div>;
      case 'E-Certificate':
        return <div>ma5in</div>;
      case 'History':
        return <div>ma6in</div>;
    }
  };

  return (
    <div className='layout'>
      <Navbar />
      <main className='main-page'>
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
        ></Sidebar>
        {renderMainPage()}
      </main>
    </div>
  );
};

export default Layout;
