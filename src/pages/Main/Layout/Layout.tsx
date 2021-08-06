import './layout.scss';

import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

const Layout = () => {
  return (
    <div className='layout'>
      <Navbar />
      <main className='main-page'>
        <Sidebar>main</Sidebar>
        <div className='main-content-wrapper'></div>
      </main>
    </div>
  );
};

export default Layout;
