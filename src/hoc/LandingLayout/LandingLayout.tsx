import Header from './Header/Header';
import { ReactChild } from 'react';

interface LandingLayoutProps {
  children: ReactChild | ReactChild[];
}
const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LandingLayout;
