import './main.scss';

import Layout from './Layout/Layout';
import { useTypedSelector } from '../../hooks/use-typed-selector';

const Main = () => {
  const mode = useTypedSelector((state) => state.modes.mode);

  return (
    <div className='main'>
      <Layout />
    </div>
  );
};

export default Main;
