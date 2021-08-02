import './layout.scss';

import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

const Layout = () => {
  return (
    <div className='layout'>
      <Navbar />
      <main className='main-page'>
        <Sidebar>main</Sidebar>
      </main>
    </div>
  );
};

export default Layout;
