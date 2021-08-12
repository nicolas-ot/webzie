import styles from './landingLayout.module.scss';

import Header from './Header/Header';
import { ReactChild } from 'react';

interface LandingLayoutProps {
  children: ReactChild | ReactChild[];
}
const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  window.onload = () => {
    var status = 'individual';
  };

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LandingLayout;
