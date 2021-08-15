import './main.scss';

import Layout from '../../hoc/Layout/Layout';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/use-typed-selector';

const Main = () => {
  const [activePage, setActivePage] = useState('E-Certificate');
  const mode = useTypedSelector((state) => state.modes.mode);

  useEffect(() => {
    setActivePage('E-Certificate');
  }, [mode]);
  return (
    <Layout>
      <div className='main-page-main-content'>
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
        ></Sidebar>
        <Content activePage={activePage} />
      </div>
    </Layout>
  );
};

export default Main;
