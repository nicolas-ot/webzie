import { ReactNode } from 'react';
import Footer from './Footer/Footer';
import styles from './layout.module.scss';

import Navbar from './Navbar/Navbar';

interface LayoutProps {
  children: ReactNode | ReactNode[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <Navbar />
      <main className='main-page-wrapper'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
