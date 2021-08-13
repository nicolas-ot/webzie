import { ReactElement, ReactNode } from 'react';
import { ContentProps } from '../../pages/Main/Content/Content';
import Footer from './Footer/Footer';

import Navbar from './Navbar/Navbar';

interface LayoutProps {
  children: ReactNode | ReactNode[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='main-layout'>
      <Navbar />
      <main className='main-page'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
